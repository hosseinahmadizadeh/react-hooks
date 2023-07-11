import React, { useCallback, useReducer } from "react";

import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Search from "./Search";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.products;
    case "ADD":
      return [...state, action.product];
    default:
      throw new Error("Error");
  }
};

const Products = () => {
  // const [products, setProducts] = useState([]);

  const [products, dispatch] = useReducer(productReducer, []);

  const searchProductsHandler = useCallback((items) => {
    // setProducts(items);
    dispatch({ type: "SET", products: items });
  }, []);

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
        // setProducts((prevState) => {
        //   return [
        //     ...prevState,
        //     {
        //       id: responseData.name,
        //       ...item,
        //     },
        //   ];
        // });

        dispatch({
          type: "ADD",
          product: { id: responseData.name, ...item },
        });
      });
    });
  };
  return (
    <div className="App">
      <ProductForm onAddProduct={addProductHandler} />

      <section>
        <Search onLoadProducts={searchProductsHandler} />
        <ProductList products={products} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Products;
