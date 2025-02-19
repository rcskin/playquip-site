import category from '../schemaTypes/category'
import product from '../schemaTypes/product'
import blockContent from '../schemaTypes/blockContent'
import umbrellaCategory from './umbrellaCategory'

export const schema = {
  types: [umbrellaCategory, category, product, blockContent],
}
