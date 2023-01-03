import React from 'react';
import Cart from '../src/components/Cart';
import Main from '../src/components/Main';
import Sidebar from '../src/components/Sidebar';
import { products } from '../src/data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSizes: [],
      cartItems: [],
    };
    this.eventId = null;
  }
  componentDidMount() {
    if (localStorage.carts) {
      this.setState({
        cartItems: JSON.parse(localStorage.carts),
      });
    }
    this.eventId = window.addEventListener(
      'beforeunload',
      this.handleUpdateLocalStorage
    );
  }
  componentWillUnmount() {
    window.removeEventListener(this.eventId, null);
  }
  handleClick = (size) => {
    if (this.state.selectedSizes.includes(size)) {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.filter((s) => s != size),
      }));
    } else {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.concat(size),
      }));
    }
  };
  handleAddToCart = (p) => {
    let isPresent =
      this.state.cartItems.findIndex((product) => product.id == p.id) !== -1;
    if (isPresent) {
      this.incrementQuantity(p.id);
    } else {
      this.setState((prevState) => ({
        cartItems: prevState.cartItems.concat({ ...p, quantity: 1 }),
      }));
    }
  };
  incrementQuantity = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((p) => {
        if (p.id == id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      return { cartItems: updatedCartItems };
    });
  };
  decrementQuantity = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((p) => {
        if (p.id == id) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
      return { cartItems: updatedCartItems };
    });
  };
  deleteItem = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.filter((p) => {
        return p.id !== id;
      });
      return { cartItems: updatedCartItems };
    });
  };
  handleUpdateLocalStorage = () => {
    localStorage.setItem('carts', JSON.stringify(this.state.cartItems));
  };
  render() {
    return (
      <div className="wrapper flex space-between">
        <Sidebar
          products={products}
          selectedSizes={this.state.selectedSizes}
          handleClick={this.handleClick}
        />
        <Main
          products={products}
          selectedSizes={this.state.selectedSizes}
          handleAddToCart={this.handleAddToCart}
        />
        <Cart
          cartItems={this.state.cartItems}
          incrementQuantity={this.incrementQuantity}
          decrementQuantity={this.decrementQuantity}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
