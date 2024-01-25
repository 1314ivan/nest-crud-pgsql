import { PartialType} from '@nestjs/swagger'
import { CardsCreateDto } from './cards-create.dto'

export class CardsUpdateDto extends PartialType(CardsCreateDto) {}
