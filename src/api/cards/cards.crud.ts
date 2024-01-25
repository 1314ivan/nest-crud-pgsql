import { Cards } from "src/db/entities/cards.entity"
import { CardsCreateDto } from "./dto/cards-create.dto"
import { CardsUpdateDto } from "./dto/cards-update.dto"
import { CrudOptions } from "@dataui/crud"

const cardsCrud : CrudOptions = {
  model: {
    type: Cards
  },
  params: {
    columnsId: {
      field: 'columnId',
      type: 'number',
    },
    },
  query: {
    sort: [
      {
        field: 'createdAt',
        order: 'DESC'
      }
    ]
  },
  dto:{
    create: CardsCreateDto,
    update: CardsUpdateDto
  }
}
export {cardsCrud}