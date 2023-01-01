function Card(props) {
  return (
    <>
      {props.details.map((elm, i) => {
        return (
          <div className="card" key={i}>
            <img
              className="product-img"
              src={`/static/products/${elm.sku + '_1.jpg'}`}
              width="250px"
            />
            <span className="product-title">{elm.title}</span>
            <hr className="product-line" />
            <span className="product-price">
              $<h1>{elm.price}</h1>
            </span>
            <button onClick={(e) => props.handleAddToCart(e, elm)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Card;
