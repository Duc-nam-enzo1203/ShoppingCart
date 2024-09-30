import { LOCAL_STORAGE_NAME } from "../constants/localStorage";
import { BUY_ITEM, UPDATE_ITEM, REMOVE_ITEM } from "../constants/actionTypes";

//Chưa mua hàng
let initialState = [];
//Đã mua hàng --> get localStorage
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
initialState = (shoppingCartLocal != null && shoppingCartLocal.length > 0) ? shoppingCartLocal : initialState;
// hàm kiểm tra sản phẩm đã có trong giỏ hàng hay chưa?
const getIndexByProduct = (listItem, product)=>{
    for (let index = 0; index < listItem.length; index++) {
        if(listItem[index].product.productId === product.productId){
            return index;
        }
    }
    return -1;
}
// tạo reducer ->cart
const cart = (state=initialState, action)=>{
    // lấy sản phẩm, số lượng từ action
    let {product, quantity} = action;
    let item={product, quantity} ;
    let index = -1;
    switch (action.type) {
        case BUY_ITEM:
            if (state.length===0) {
                //Khách hàng chưa mua hàng -- Giỏ hàng của khách hàng chưa có sản phẩm
                //--> add item vào giỏ hàng
                state.push(item);
            }else{
                //Khách hàng đã mua hàng -- Giỏ hàng đã có sản phẩm
                index = getIndexByProduct(state,product);
                if (index>=0) {
                    //Sản phẩm mua đã tồn tại trong giỏ hàng
                    //--> cộng quantity vào số lượng của item trong giỏ hàng
                    state[index].quantity=parseInt(state[index].quantity)+parseInt(quantity);
                }else{
                    //Sản phẩm mua chưa có trong giỏ hàng
                    state.push(item);
                }
            }
            //Lưu giỏ hàng vào local storage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        case UPDATE_ITEM:
            index = getIndexByProduct(state,product); 
            if(index>=0){
                state[index].quantity = parseInt(item.quantity);
            }
            // lưu lại giỏ hàng vào localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        case REMOVE_ITEM:
            index = getIndexByProduct(state,product); 
            if(index>=0){
                // thực hiện xóa
                state.splice(index,1);
            }
            // lưu lại giỏ hàng vào localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default cart;