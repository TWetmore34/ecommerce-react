import { gql} from '@apollo/client'

export const QUERY_PRODUCTS = gql`
query Query {
    products {
      _id
      name
      description
      img
      price
      quantity
      category {
        name
      }
    }
  }
`;