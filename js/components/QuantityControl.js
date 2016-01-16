const React = require("react");
const {products,cartItems} = require("../data.js");

let QuantityControl = React.createClass({
  render() {
    let id = this.props.item.id;
    if (cartItems[id] == null) {
      return (
        <a className="product__add">
      <img className="product__add__icon" src="img/cart-icon.svg"/>
        </a>
      )
    } else {
      var className = "adjust-qty";
      if (this.props.variant == "gray") {
        className = "adjust-qty adjust-qty--gray";
      }
      return (
        <div className={className}>
          <a className="adjust-qty__button">-</a>
          <div className="adjust-qty__number">{cartItems[id].quantity}</div>
          <a className="adjust-qty__button">+</a>
        </div>
      )
    }
  }
}
)

module.exports = QuantityControl;
