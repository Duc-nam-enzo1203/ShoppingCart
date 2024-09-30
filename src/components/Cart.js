import React, { Component } from "react";
import CartInfo from "./CartInfo";
import CartItem from "./CartItem";
import Notify from "./Notify";
import {connect} from 'react-redux';
class Cart extends Component {
  render() {
    // lấy dữ liệu từ props (cart) - lấy từ store
    let {cart} = this.props;
    console.log("Cart:",cart);
    let elementCartItem = cart.map((item,key)=>{
      return <CartItem key={key} item={item} index={key+1} />;
    })
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">#</th>
                  <th>Pokemon</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="20%">Subtotal</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {/* CART BODY */}
                {elementCartItem}
              </tbody>
              <tfoot id="my-cart-footer">
                {/* CART FOOTER */}
                <CartInfo cart={this.props.cart} />
              </tfoot>
            </table>
          </div>
        </div>
        <Notify />
      </div>
    );
  }
}

// map state từ store đến component (Cart) thông qua thuộc tính cart
const mapStateToProps = (state)=>{
  return {
    cart:state.cart,
  }
}


export default connect(mapStateToProps,null)(Cart);
