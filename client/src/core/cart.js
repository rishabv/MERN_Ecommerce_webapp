import React, { useEffect, useState } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./card";
import { loadCart } from "./helper/cartHelper";
import {StripeCheckout} from './StripeCheckout'

const Cart = () => {
  const [products, setproducts] = useState([]);

  const [reload, setreload] = useState(false);

  useEffect(() => {
    setproducts(loadCart());
  }, [reload]);
 
  const loadAllProducts = () => {
    return (
      <div>
        <h1>Your products</h1>
        {products.map((product, index) => (
          <div className="col-8">
          <Card
              key={index}
              product={product}
              removeFromCart={true}
              addtoCart={false}
              setreload={setreload}
              reload={reload}
            />
            </div>      
            ))}
            </div>
    )
  }

  // const loadcheckout = () => {
  //   return (
  //     <div>
  //       <h1>This section is for checkout </h1>
  //     </div>
  //   );
  // };
  return (
    <Base title="cart page" description="complete your checkout">
      <div className="row text-center">
        <div className="col-6">{products.length>0 ? loadAllProducts():(<h3>No products</h3>)}</div>
        <div className="col-6"><StripeCheckout products={products} 
  setreload={setreload}/></div>
      </div>
    </Base> 
  );
};

export default Cart;

export const cartEmpty=next=>{
  if(typeof window!==undefined){
    localStorage.removeItem("cart")
    next()
  }
}