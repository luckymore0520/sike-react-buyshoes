// App 组件

"use strict";

var products = {

  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man"
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man"
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man"
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man"
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman"
  }
};

var cartItems = {
  "jameson-vulc": {
    id: "jameson-vulc",
    quantity: 1
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    quantity: 1
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    quantity: 1
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    quantity: 1
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    quantity: 1
  }
};

var Products = React.createClass({
  displayName: "Products",

  render: function render() {
    var productsRows = [];
    for (var key in products) {
      productsRows.push(React.createElement(Product, { key: key, product: products[key] }));
    }
    return React.createElement(
      "div",
      { className: "products" },
      productsRows
    );
  }
});

var CartItems = React.createClass({
  displayName: "CartItems",

  render: function render() {
    var cartItemRows = [];
    for (var key in cartItems) {
      var cartItemRawValue = cartItems[key];
      var cartItem = {
        id: cartItemRawValue.id,
        quantity: cartItemRawValue.quantity,
        imagePath: products[key].imagePath,
        price: "$" + products[key].price
      };
      if (cartItem.quantity > 1) {
        cartItem.price = cartItem.price + " * " + cartItemRawValue.quantity;
      }
      cartItemRows.push(React.createElement(CartItem, { key: key, cartItem: cartItem }));
    }
    return React.createElement(
      "div",
      { className: "cart__content" },
      React.createElement(
        "h3",
        { className: "cart__title cart__title--spacer" },
        "Shopping Cart"
      ),
      cartItemRows
    );
  }
});

var Checkout = React.createClass({
  displayName: "Checkout",

  render: function render() {
    var total = 0;
    for (var key in cartItems) {
      var cartItemRawValue = cartItems[key];
      total += cartItemRawValue.quantity * products[key].price;
    }
    return React.createElement(
      "div",
      { className: "checkout" },
      React.createElement("hr", { className: "checkout__divider" }),
      React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code" }),
      React.createElement(
        "div",
        { className: "checkout__line" },
        React.createElement(
          "div",
          { className: "checkout__line__label" },
          "Subtotal"
        ),
        React.createElement(
          "div",
          { className: "checkout__line__amount" },
          "$" + total
        )
      ),
      React.createElement(
        "a",
        { className: "checkout__button" },
        React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
        React.createElement(
          "div",
          { className: "checkout__button__label" },
          "Checkout"
        )
      )
    );
  }
});

var QuantityControl = React.createClass({
  displayName: "QuantityControl",

  render: function render() {
    var id = this.props.item.id;
    if (cartItems[id] == null) {
      return React.createElement(
        "a",
        { className: "product__add" },
        React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
      );
    } else {
      var className = "adjust-qty";
      if (this.props.variant == "gray") {
        className = "adjust-qty adjust-qty--gray";
      }
      return React.createElement(
        "div",
        { className: className },
        React.createElement(
          "a",
          { className: "adjust-qty__button" },
          "-"
        ),
        React.createElement(
          "div",
          { className: "adjust-qty__number" },
          cartItems[id].quantity
        ),
        React.createElement(
          "a",
          { className: "adjust-qty__button" },
          "+"
        )
      );
    }
  }
});

var Product = React.createClass({
  displayName: "Product",

  render: function render() {
    // 这个组件需要 `product` 属性。
    var _props$product = this.props.product;
    var id = _props$product.id;
    var name = _props$product.name;
    var price = _props$product.price;
    var imagePath = _props$product.imagePath;
    var gender = _props$product.gender;

    return React.createElement(
      "div",
      { className: "product" },
      React.createElement(
        "div",
        { className: "product__display" },
        React.createElement(
          "div",
          { className: "product__img-wrapper" },
          React.createElement("img", { className: "product__img", src: imagePath })
        ),
        React.createElement(
          "div",
          { className: "product__control" },
          React.createElement(QuantityControl, { item: this.props.product, variant: "gray" })
        ),
        React.createElement(
          "div",
          { className: "product__price" },
          price
        )
      ),
      React.createElement(
        "div",
        { className: "product__description" },
        React.createElement(
          "div",
          { className: "product__name" },
          name
        ),
        React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
      )
    );
  }
});

var CartItem = React.createClass({
  displayName: "CartItem",

  render: function render() {
    var _props$cartItem = this.props.cartItem;
    var id = _props$cartItem.id;
    var quantity = _props$cartItem.quantity;
    var imagePath = _props$cartItem.imagePath;
    var price = _props$cartItem.price;

    return React.createElement(
      "div",
      { className: "cart-item" },
      React.createElement(
        "div",
        { className: "cart-item__top-part" },
        React.createElement(
          "div",
          { className: "cart-item__image" },
          React.createElement("img", { src: imagePath })
        ),
        React.createElement(
          "div",
          { className: "cart-item__top-part__middle" },
          React.createElement(
            "div",
            { className: "cart-item__title" },
            id
          ),
          React.createElement(
            "div",
            { className: "cart-item__price" },
            price
          )
        ),
        React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
      ),
      React.createElement(QuantityControl, { item: this.props.cartItem, variant: "" })
    );
  }
});

var App = React.createClass({
  displayName: "App",

  componentDidMount: function componentDidMount() {
    var $content = React.findDOMNode(this.refs.cartItems);
    console.log($content);
    Ps.initialize($content);
    console.log("PS Initialized");
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "site" },
      React.createElement(
        "div",
        { className: "bg" },
        React.createElement("div", { className: "bg__img" })
      ),
      React.createElement(
        "div",
        { className: "site__main" },
        React.createElement(
          "div",
          { className: "site__left-sidebar" },
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h2",
              null,
              "Buy Me Shoes"
            ),
            React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
          )
        ),
        React.createElement(
          "div",
          { className: "site__content" },
          React.createElement(Products, null)
        )
      ),
      React.createElement(
        "div",
        { className: "site__right-sidebar" },
        React.createElement(
          "div",
          { className: "cart" },
          React.createElement(
            "h3",
            { className: "cart__title" },
            "Shopping Cart"
          ),
          React.createElement(CartItems, { ref: "cartItems" })
        ),
        React.createElement(Checkout, null)
      ),
      React.createElement(
        "a",
        { className: "site__right-sidebar-toggle" },
        React.createElement("img", { src: "img/arrow-icon.svg" })
      )
    );
  }
});

window.onload = function () {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(React.createElement(App, null), document.querySelector("#root"));
};
