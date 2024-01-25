import { PickType } from "@nestjs/swagger";
import { Columns } from "src/db/entities/columns.entity";

export class ColumnsCreateDto extends PickType(Columns, ["name"]) {

}