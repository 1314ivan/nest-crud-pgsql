import { NestInterceptor, ExecutionContext, CallHandler, Inject, ForbiddenException } from '@nestjs/common'
import { Observable } from 'rxjs'
import { Repository } from 'typeorm'
import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { getRepositoryToken } from '@nestjs/typeorm'

export function ABACValidator<T extends new (...args: any[]) => any>(entityClass: T): any {
  class ABACInterceptor extends TypeOrmCrudService<T> implements NestInterceptor {
    constructor(
      @Inject(getRepositoryToken(entityClass))
      protected readonly repo: Repository<T>
    ) {
      super(repo)
    }
    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
      const req = context.switchToHttp().getRequest()
      const { query, user, body } = req
      const isCRUDOne = !!req.params?.id

      const subValidate = async () => {
        for (let i of Object.keys(req.params).filter(el => el != 'id')) {
          // TODO
          const [elem] = await this.repo.query(
            `
            SELECT
            *
            FROM ${i.substring(0, i.length - 2)}
            WHERE id = $1 AND "creatorId" = $2
            `,
            [req.params[i], user.id]
          )
          if (!elem) throw new ForbiddenException('Недостаточно прав для выполнения операции по атрибуту')
        }
      }

      if (!isCRUDOne) {
        if (req.method === 'GET') {
          if ('s' in query) query.s.creatorId = user.id
          else {
            query.s = { creatorId: user.id }
          }
          query.s = JSON.stringify(query.s)
        } else {
          await subValidate()
        }
      } else {
        const elem = await this.repo
          .createQueryBuilder('e')
          .where('e.id = :id', { id: +req.params.id || req.params.id })
          .andWhere('e.creatorId = :creatorId', { creatorId: user.id })
          .getOne()

        await subValidate()
        if (!elem) {
          throw new ForbiddenException('Недостаточно прав для выполнения операции по атрибуту')
        }
      }
      if (req.method === 'POST') body.creatorId = user.id
      return next.handle()
    }
  }

  return ABACInterceptor
}
