const ProductCard = () => {
  return (
    <div className="card col-lg-3 col-sm-10 mx-sm-auto my-sm-3 m-lg-3">
        <img className="card-img-top" src="https://picsum.photos/200" alt="Product thumbnail" />
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">a quick item description or price</p>
        </div>
    </div>
  )
}

export default ProductCard