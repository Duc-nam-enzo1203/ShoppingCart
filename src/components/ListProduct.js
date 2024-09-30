import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";

class ListProduct extends Component {
  render() {
    // lấy dữ liệu từ props để hiển thị ra views
    let { products } = this.props;
    let elementListProduct = products.map((product, key) => {
      return <Product key={key} product={product} />;
    });
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {elementListProduct}
          </div>
        </div>
      </div>
    );
  }
}
// map state từ store đến component thông qua thuộc tính products
const mapStateToProps = (state) => {
  return {
    products: state.listProduct,
  };
};

export default connect(mapStateToProps, null)(ListProduct);
