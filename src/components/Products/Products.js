import React, { useState } from "react";

import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Search from "./Search";

const Products = () => {
  const [products, setProducts] = useState([]);

  const addProductHandler = (item) => {
    fetch(
      "https://react-hook-a1f92-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      response.json().then((responseData) => {
        setProducts((prevState) => {
          return [
            ...prevState,
            {
              id: responseData.name,
              ...item,
            },
          ];
        });
      });
    });
  };
  return (
    <div className="App">
      <ProductForm onAddProduct={addProductHandler} />

      <section>
        <Search />
        <ProductList products={products} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Products;
