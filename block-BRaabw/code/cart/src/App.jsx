import React from 'react';
import data from './data.json';
import Card from './components/Card';
import Cart from './components/Cart';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null,
      activeSize: '',
      cartStatus: false,
      cart: {
        items: [],
      },
    };
  }
  handleSize = (e) => {
    this.setState({ activeSize: e.target.innerText });
  };
  handleOrder = (e) => {
    this.setState({ order: e.target.value });
  };
  handleAddToCart = (e, product) => {
    let cart = this.state.cart.items;
    cart.push(product);
    this.setState({
      cartStatus: true,
      cart: {
        items: cart,
      },
    });
  };
  handleCart = (e) => {
    this.setState({ cartStatus: !this.state.cartStatus });
  };
  removeItem = (e, i) => {
    this.state.cart.items.splice(i, 1);
    this.setState({
      cart: {
        items: this.state.cart.items,
      },
    });
  };
  render() {
    let products;
    if (!this.state.activeSize) {
      products = data.products;
    } else {
      products = data.products.filter((elm, i) => {
        if (elm.availableSizes.includes(this.state.activeSize)) {
          return true;
        }
      });
    }

    let sizes = data.products.reduce((acc, cv) => {
      return [...new Set(acc.concat(cv.availableSizes))];
    }, []);

    return (
      <>
        <div className="app">
          <aside className="sizes">
            {sizes.map((elm, i) => {
              return (
                <span key={i} className="size-circle" onClick={this.handleSize}>
                  {elm}
                </span>
              );
            })}
          </aside>
          <main className="products">
            <Card details={products} handleAddToCart={this.handleAddToCart} />
          </main>
          <aside>
            <div className="cart-logo" onClick={this.handleCart}>
              <img src="/static/bag-icon.png" />
              <h5>Check Your Cart</h5>
            </div>
            <div className="order">
              <label htmlFor="order">Order By-</label>
              <select name="order" id="order" onChange={this.handleOrder}>
                <option value="">Select</option>
                <option value="l2h">Lowest to Highest</option>
                <option value="h2l">Highest to Lowest</option>
              </select>
            </div>
          </aside>
        </div>
        <Cart
          details={this.state.cart.items}
          handleCart={this.handleCart}
          status={this.state.cartStatus}
          removeItem={this.removeItem}
        />
      </>
    );
  }
}

export default App;
// order
// switch (this.state.order) {
//   case '':
//     products = data.products;
//     break;
//   case 'l2h':
//     products = [...data.products].sort((a, b) => a.price < b.price);
//     break;
// }
