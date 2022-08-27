import ProductCard from "./ProductCard"

const ProductList = () => {
    const styles = {
        margin: '10px auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: '10px'
    }
  return (
    <div>
    <h2 style={{margin: '10px'}}>Products</h2>
    <hr></hr>
    <div style={styles}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
    </div>
  )
}

export default ProductList