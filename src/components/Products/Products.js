import React, { useState } from "react";

import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Search from "./Search";

const Products = () => {
  const [products, setProducts] = useState([]);

  const addProductHandler = (item) => {
    setProducts((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random().toString(),
          ...item,
        },
      ];
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
