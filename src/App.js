// src/App.js
import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import product from "./product";

const App = () => {
  const firstName = "Ryan"; // Update this with your actual first name
  return (
    <div>
      <Name productName= "Smile" />
      <Price productPrice={product.price} />
      <Description productDescription={product.description} />
      {firstName && <Image productImage={product.image} />}
      <p>Hello, {firstName ? firstName : "there"}!</p>
    </div>
  );
};

export default App;
