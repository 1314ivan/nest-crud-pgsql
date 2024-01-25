import { ApiProperty } from '@nestjs/swagger'
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export class BaseEntity {
  @ApiProperty({ example: 5432, description: 'ID' })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ example: '2024-01-25T22:36:01.332Z', description: 'Время и дата создания' })
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date

  @ApiProperty({ example: '2024-01-25T22:36:01.332Z', description: 'Время и дата обновления' })
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date
}
