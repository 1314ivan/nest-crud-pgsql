import { PickType } from '@nestjs/swagger'
import { Cards } from 'src/db/entities/cards.entity'

export class CardsCreateDto extends PickType(Cards, ['name']) {}
