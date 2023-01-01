function Cart(props) {
  if (props.details.length == 0) {
    return null;
  }
  return (
    <>
      <div className={`${props.status ? 'cart' : 'hidden cart'}`}>
        <div className="cart-head">
          <div className="cart-close" onClick={props.handleCart}>
            ❌
          </div>

          <div>
            <img src="/static/bag-icon.png" className="cart-logo-in" />
            <span>Cart</span>
          </div>
          <div></div>
        </div>
        <hr />
        <div className="cart-items">
          {props.details.map((elm, i) => {
            return (
              <>
                <div className="item-row">
                  <img
                    src={`/static/products/${elm.sku}_2.jpg`}
                    className="cart-item-img"
                  />
                  <div className="item-description">
                    <span>{elm.title}</span>
                    <br />
                    <span>{elm.description}</span>
                    <br />
                    <span>Quantity- 1</span>
                  </div>
                  <div>${elm.price}&nbsp;</div>
                  <div
                    className="remove-item"
                    onClick={(e) => props.removeItem(e, i)}
                  >
                    ❌
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
        <div className="checkout-area">
          <div className="subtotal">
            <div>SUBTOTAL</div>
            <div>
              $
              {Math.ceil(
                props.details.reduce((acc, cv) => {
                  acc += cv.price;
                  return acc;
                }, 0)
              )}
            </div>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
//  {
//    props.details.map((elm, i) => {
//      return <h3>{elm.title}</h3>;
//    });
//  }
