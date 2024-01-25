import { Entity, Column, CreateDateColumn } from 'typeorm';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity('refresh_tokens')
export class RefreshToken {

  @ApiProperty({example: '06721cc4024e01df64d7dc', description: 'Значение'})
  @IsString()
  @Column({
    primary: true,
  })
  value: string;

  @ApiProperty({example: 1, description: 'ID пользователя'})
  @IsString()
  @Column()
  userId: number;

  @ApiProperty({example: '2022-02-02 00:00:00.000001+00', description: 'Дата создания'})
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @ApiProperty({example: '2024-04-04 00:00:00.000001+00', description: 'Дата истечения'})
  @Column()
  expiresAt: Date;

  @ApiProperty({example: 'nd-dpo', description: 'Клиент'})
  @IsOptional()
  @IsString()
  @Column({ nullable: true, default: '' })
  clientId: string;

  @ApiProperty({example: '127.0.0.1', description: 'IP'})
  @IsString()
  @Column()
  ipAddress: string;
}
