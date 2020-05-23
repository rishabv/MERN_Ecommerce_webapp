import React, { useEffect, useState } from "react";
import { isAutheticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import StripeCheckoutbtn from "react-stripe-checkout";
import { API } from "../backend";

export const StripeCheckout = ({
  products,
  setreload = (f) => f,
  reload = undefined,
}) => {
  const [data, setdata] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAutheticated() && isAutheticated().token;
  const userId = isAutheticated() && isAutheticated().user._id;

  const getFinalAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  const makepayment = (token) => {
    const body = {
      token,
      products,
    };
    const headers = {
      "content-Type": "application/json",
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        const { status } = response;
        console.log("STATUS", status);
        cartEmpty();
        setreload(!reload)
      })
      .catch((error) => console.log(error));
  };
  // const pKey=Stripe.setPublishablekey("pk_test_qNtfXVSyFkafNBUX0wIDloZ800ckS2dCQI")
  const showStripeButton = () => {
    return isAutheticated() ? (
      <StripeCheckoutbtn
        stripeKey="pk_test_qNtfXVSyFkafNBUX0wIDloZ800ckS2dCQI"
        token={makepayment}
        amount={getFinalAmount() * 100}
        name="buyTshirts"
        shippingAddress
        billingAddress
      >
        <button className="btn btn-primary">Pay with stripe</button>
      </StripeCheckoutbtn>
    ) : (
      <Link to="/signIn">
        <button className="btn btn-warning">Pay with stripe</button>
      </Link>
    );
  };

  return (
    <div>
      <h3 className="text-white">Stripe Checkout {getFinalAmount()}</h3>
      {showStripeButton()}
    </div>
  );
};
