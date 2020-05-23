import React,{useEffect} from "react";
import Base from "../core/Base";
import Card from "./card";
import { getProducts } from "../admin//helper/adminapicall";

const productPage = () => {
  const preload = () => {
    getProducts().then(data => {
      if (data?.error) {
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  };

  return( 
    <div>
        <Card/>
    </div>
    )
};

export default productPage;