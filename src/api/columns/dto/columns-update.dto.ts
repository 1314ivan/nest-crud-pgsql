import { PartialType, PickType } from '@nestjs/swagger'
import { ColumnsCreateDto } from './columns-create.dto';


export class ColumnsUpdateDto extends PartialType(ColumnsCreateDto) {}