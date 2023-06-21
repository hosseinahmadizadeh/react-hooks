import React, { useState } from "react";

import Card from "../UI/Card";

import "./ProductForm.css";

const ProductForm = React.memo((props) => {
  const [inputState, setInputState] = useState({ title: "", amount: "" });

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="product-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">عنوان</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={(event) =>
                setInputState({
                  title: event.target.value,
                  amount: inputState.amount,
                })
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">تعداد</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={(event) =>
                setInputState({
                  amount: event.target.value,
                  title: inputState.title,
                })
              }
            />
          </div>
          <div className="product-form__actions">
            <button type="submit">افزودن</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default ProductForm;
