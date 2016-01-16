const React = require("react");
const {products,cartItems} = require("../data");
const QuantityControl = require("./QuantityControl");

let CartItems = React.createClass({
  render(){
    var cartItemRows = [];
    for (var key in cartItems) {
      let cartItemRawValue = cartItems[key];
      let cartItem = {
        id:cartItemRawValue.id,
        quantity:cartItemRawValue.quantity,
        imagePath:products[key].imagePath,
        price:"$" + products[key].price
      }
      if (cartItem.quantity > 1) {
         cartItem.price = cartItem.price + " * " + cartItemRawValue.quantity;
      }
      cartItemRows.push(<CartItem key = {key} cartItem={cartItem}/>)
    }
    return (
      <div className="cart__content">
        <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
        {cartItemRows}
      </div>
    )
  }
}
);



let CartItem = React.createClass({
  render: function() {
    let {id,quantity,imagePath,price} = this.props.cartItem;
    return (
      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={imagePath} />
          </div>
          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
            {id}
            </div>
            <div className="cart-item__price">
            {price}
            </div>
          </div>
          <img className="cart-item__trash" src="img/trash-icon.svg" />
        </div>
        <QuantityControl item={this.props.cartItem} variant="" />
      </div>
    );
  }
});

module.exports = CartItems;
