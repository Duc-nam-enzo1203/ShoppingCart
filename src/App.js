import React from "react";
import Cart from "./components/Cart";
import ListProduct from "./components/ListProduct";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <ListProduct />
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <Cart />
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
