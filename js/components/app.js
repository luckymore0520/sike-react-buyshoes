const React = require("react");
const Ps = require("perfect-scrollbar");
const SiteTitles = require("./SiteTitles");
const Products = require("./Products");
const CartItems = require("./Cart");
const Checkout = require("./Checkout");

let App = React.createClass({
  componentDidMount() {
    let $content = React.findDOMNode(this.refs.cartItems);
    console.log($content)
    Ps.initialize($content);
    console.log("PS Initialized");
  },
  render: function() {
    return (
      <div className="site">
        <div className="bg">
          <div className="bg__img">
          </div>
        </div>
        <div className="site__main">
          <div className="site__left-sidebar">
          <SiteTitles/>
          </div>
          <div className="site__content">
          <Products />
          </div>
        </div>
        <div className="site__right-sidebar">
        <div className="cart">
          <h3 className="cart__title">Shopping Cart</h3>
          <CartItems ref="cartItems" />
        </div>
          <Checkout />
        </div>
        <a className="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg" />
        </a>
      </div>
    );
  }
});

module.exports = App;
