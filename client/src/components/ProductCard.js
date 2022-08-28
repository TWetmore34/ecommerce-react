const ProductCard = ({ name, description, img, price, quantity }) => {
  console.log(quantity)

  return (
    <div className="card col-lg-3 col-sm-10 mx-sm-auto my-sm-3 m-lg-3">
        <img className="card-img-top" src="https://picsum.photos/200" alt="Product thumbnail" />
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p>{quantity < 0 ? 'Out of Stock' : quantity + ' in stock'}</p>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default ProductCard