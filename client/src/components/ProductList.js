import ProductCard from "./ProductCard"
import { QUERY_PRODUCTS } from "../utils/queries"
import { useQuery } from "@apollo/client"

const ProductList = () => {
    const styles = {
        margin: '10px auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: '10px'
    }


    const { loading, error, data } = useQuery(QUERY_PRODUCTS)
  return (
    <div>
    <h2 style={{margin: '10px'}}>Products</h2>
    <hr></hr>
    <div style={styles}>
      {loading ? null : data['products'].map(product => (
        <ProductCard name={product.name} description={product.description} img={product.img} price={product.price} quantity={product.quantity} />
      ))}
    </div>
    </div>
  )
}

export default ProductList