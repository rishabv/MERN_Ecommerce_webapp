import React, { useEffect, useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setreload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setredirect] = useState(false);

  const [count, setcount] = useState(product.count);

  const cardTitle = product ? product.name : "A photo from pexels";

  const cardDescription = product ? product.description : "default description";

  const cardPrice = product ? product.price : "default price";

  const addToCart = () => {
    addItemToCart(product, () => setredirect(true));
  };

  // const plusToCart = () => {
  //   addItemToCart(product, () => setredirect(true));
  // };

  const getredirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddtoCart = (addtoCart) => {
    return (
      addtoCart && (
        <div className="row">
          <button
            onClick={addToCart}
            className=" col-5 btn btn-block btn-primary mt-2 ml-3"
          >
            Add to Cart
          </button>
          <button className="col-5 btn btn-block btn-info ml-3">
            View details
          </button>
        </div>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <div>
          <div className="row">
            <button
              onClick={() => {
                removeItemFromCart(product._id);
                setreload(!reload);
              }}
              className="col-5 btn btn-block btn-outline-danger ml-3"
            >
              Remove from cart
            </button>
            <div className="col-5 ml-4">
              <button 
              onClick={() => {
                removeItemFromCart(product._id);
                setreload(!reload);
              }}
              class="btn btn-outline-primary"> - </button> 1
              <button 
              onClick={()=>{addToCart(product.id);
                setreload(!reload);
              }} 
              class="btn btn-outline-primary">
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-primary mt-3 ">
      <div className="card-body">
        {getredirect(redirect)}
        <ImageHelper product={product} />
        <div className="card-header lead">
          <h4>{cardTitle}</h4>
        </div>

        <p className="btn btn-outline-primary rounded btn-sm px-4">
          Rs. {cardPrice}
        </p>
        <div className="row">
          <div className="col-12">{showAddtoCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
