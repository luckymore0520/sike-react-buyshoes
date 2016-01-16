const React = require("react");
const {products,cartItems} = require("../data");

let Checkout = React.createClass({
  render: function() {
    var total = 0;
    for (var key in cartItems) {
      let cartItemRawValue = cartItems[key];
      total += cartItemRawValue.quantity * products[key].price;
    }
    return (
      <div className="checkout">
        <hr className="checkout__divider" />
        <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
        <div className="checkout__line">
          <div className="checkout__line__label">
            Subtotal
          </div>
          <div className="checkout__line__amount">
          {"$"+total}
          </div>
        </div>
        <a className="checkout__button">
          <img className="checkout__button__icon" src="img/cart-icon.svg" />
          <div className="checkout__button__label">
            Checkout
          </div>
        </a>
      </div>
    );
  }
});

module.exports = Checkout;
