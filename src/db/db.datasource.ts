import { resolve } from 'path'
import { DataSource, DataSourceOptions } from 'typeorm'


require('dotenv').config({
  path: resolve(process.cwd(), `.env`).replace('src\\db\\migrations', '')
})

export const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  migrationsTableName: 'migration',
  entities: [__dirname.replace(/\\/g, '/') + '/entities/*.entity.{ts,js}'],
  migrations: [__dirname.replace(/\\/g, '/') + '/migrations/*.{ts,js}'],
  synchronize: true,
  logging: !false,
}

export const dataSource: DataSource = new DataSource(options)