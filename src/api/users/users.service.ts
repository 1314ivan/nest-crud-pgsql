import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Users } from 'src/db/entities/users.entity'
import { Repository } from 'typeorm'
import { RegisterDto } from '../auth/dto/register.dto'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}

  public async getOneBy(key: keyof Users, value: number | string, select?: (keyof Users)[]): Promise<Users> {
    return this.repo.findOne({ where: { [key]: value }, select })
  }
  public async createOne(user: RegisterDto): Promise<Users> {
    const newUser = await this.repo.save(this.repo.create(user))
    return this.getOneBy('id', newUser.id)
  }
}
