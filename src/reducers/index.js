import { combineReducers } from "redux";
import cart from "./cart";
import listProduct from "./listProduct";
import notify from "./notify";

const reducer = combineReducers({
    listProduct:listProduct,
    cart:cart,
    notify:notify
});
export default reducer;