import React, { Component } from "react";

export default class CartInfo extends Component {
  render() {
    let {cart} = this.props;
    let elementCartInfo = <tr><th colspan="6">Empty product in your cart</th></tr>;
    if(cart !=null && cart.length>0){
      elementCartInfo = (
        <tr>
          <td colSpan={4}>
            There are <b>5</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            12 USD
          </td>
        </tr>
      )
    }
    return (
        <>
        {elementCartInfo}
        </>
    );
  }
}
