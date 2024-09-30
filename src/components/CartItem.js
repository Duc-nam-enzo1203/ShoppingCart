import React, { Component } from "react";
import { connect } from "react-redux";
import {act_update_item, act_change_notify,act_remove_item } from "../actions";
import {MSG_REMOVE_SUCCESS, MSG_UPDATE_SUCCESS} from '../constants/messages'

class CartItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity:0,
    }
  }
  
  handleUpdateItem = (product)=>{
    // gọi action UpdateItem
    this.props.updateItem(product, this.state.quantity);
    // gọi action changeNotify
    this.props.changeNotify(MSG_UPDATE_SUCCESS);
  }

  handleRemoveItem = (product)=>{
     // gọi action removeItem
     this.props.removeItem(product);
     // gọi action changeNotify
     this.props.changeNotify(MSG_REMOVE_SUCCESS);
  }
  componentWillReceiveProps = (nextProps)=>{
    console.log("nextProps",nextProps.item.quantity);
    this.setState({
      quantity:nextProps.item.quantity
    })
  }

  render() {
    // lấy dữ liệu từ props (item)
    let {item, index} = this.props;
    let {product} = item;
    console.log("CartItem",item);
    let quantity = (this.state.quantity ===0)? item.quantity:this.state.quantity;
    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{item.product.productName}</td>
        <td>{item.product.price} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={quantity}
            onChange={(e)=>this.setState({quantity:e.target.value})}
          />
        </td>
        <td>
          <strong>12 USD</strong>
        </td>
        <td>
          <a type='button' 
            className="label label-info update-cart-item"
            href="/#"
            data-product=""
            onClick={()=>this.handleUpdateItem(product)}
          >
            Update
          </a>
          <a type='button' 
            className="label label-danger delete-cart-item"
            href="/#"
            data-product=""
            onClick={()=> this.handleRemoveItem(product)}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    updateItem:(product,quantity)=>{
      dispatch(act_update_item(product,quantity))
    },
    removeItem : (product)=>{
      dispatch(act_remove_item(product))
    },
    changeNotify:(content)=>{
      dispatch(act_change_notify(content))
    }
  }
}

const mapStateToProps = (state)=>{
  return{
    cart:state.cart
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(CartItem);