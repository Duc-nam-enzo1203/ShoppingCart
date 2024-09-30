import React, { Component } from "react";
import { act_buy_item, act_change_notify } from "../actions";
import { MSG_BUY_SUCCESS } from "../constants/messages";
import { connect } from "react-redux";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  handleBuy = (product) => {
    //  thực hiện hành động mua hàng
    this.props.buyItem(product, this.state.quantity);
    // Thực hiện thay đổi thông báo
    this.props.changeNotify(MSG_BUY_SUCCESS);
  };
  render() {
    console.log(this.state.quantity);
    // lấy dữ liệu từ props (product) => hiển thị ra views
    let { product } = this.props;
    // render có điều kiện
    let elementsBuy = <span class="price"> {product.price} USD</span>;
    if (product.quantity > 0) {
      elementsBuy = (
        <>
          <input
            name="quantity-product-1"
            type="number"
            value={this.state.quantity}
            min={1}
            onChange={(e) => this.setState({ quantity: e.target.value })}
          />
          <button
            data-product={1}
            className="btn btn-success"
            onClick={() => this.handleBuy(product)}
          >
            Mua hàng
          </button>
          <a
            type="button"
            data-product={1}
            onClick={() => this.handleBuy(product)}
            href="/#"
            className="price"
          >
            {product.price} USD
          </a>
        </>
      );
    }
    return (
      <div className="media product">
        <div className="media-left">
          <a type="button" href="/#">
            <img
              className="media-object"
              src={`images/${product.image}`}
              alt="charmander"
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{product.productName}</h4>
          <p>{product.descriptions}</p>
          {elementsBuy}
        </div>
      </div>
    );
  }
}
// thực hiện bắn action đến reducer
const mapDispatchToProps = (dispatch) => {
  return {
    // bắn action mua hàng đến reducer
    buyItem: (product, quantity) => {
      dispatch(act_buy_item(product, quantity));
    },
    // bắn action làm thay đổi thông báo
    changeNotify: (content) => {
      dispatch(act_change_notify(content));
    },
  };
};

export default connect(null, mapDispatchToProps)(Product);
