// App 组件

let products = {

  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man",
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man",
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man",
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man",
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman",
  },
};

let cartItems = {
  "jameson-vulc": {
    id: "jameson-vulc",
    quantity: 1,
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2,
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    quantity: 1,
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    quantity: 1,
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    quantity: 1,
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    quantity: 1,
  },
};

let Products = React.createClass({
  render() {
    var productsRows = [];
    for (var key in products) {
      productsRows.push(<Product key = {key} product={products[key]}/>)
    }
    return (
      <div className="products">
        {productsRows}
      </div>
    )

  }
});

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
)

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

let Product = React.createClass({
  render() {
    // 这个组件需要 `product` 属性。
    let {id,name,price,imagePath,gender} = this.props.product;
    return (
      <div  className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath} />
          </div>
          <div className="product__control">
            <QuantityControl item={this.props.product} variant="gray" />
          </div>
          <div className="product__price">
            {price}
          </div>
        </div>
        <div className="product__description">
          <div className="product__name">
            {name}
          </div>
          <img className="product__heart" src="img/heart.svg" />
        </div>
      </div>
    );
  }
});

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
          <div className="title">
            <h2>Buy Me Shoes</h2>
            <img className="title__heart" src="img/heart.svg"/>
          </div>
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

window.onload = () => {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(<App/>,document.querySelector("#root"));
}
