import React, { useState } from "react";

import Card from "../UI/Card";

import "./ProductForm.css";

const ProductForm = React.memo((props) => {
  const inputState = useState({ title: "", amount: "" }); //modified

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
              value={inputState[0].title} //modified
              onChange={(event) => inputState[1]({ title: event.target.value })} //modified
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">تعداد</label>
            <input
              type="number"
              id="amount"
              value={inputState[0].amount} //modified
              onChange={(event) =>
                inputState[1]({ amount: event.target.value })
              } //modified
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
