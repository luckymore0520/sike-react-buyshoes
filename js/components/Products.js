const Data = require("../data");
const React = require("react");
const QuantityControl = require("./QuantityControl");

let {products,cartItems} = Data;

let Products = React.createClass({
  render() {
    console.log(Data);
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

let Product = React.createClass({
  render() {

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

module.exports = Products;
