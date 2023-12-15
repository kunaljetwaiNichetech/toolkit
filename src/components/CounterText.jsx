import React from "react";
import { useSelector } from "react-redux";

export default function CounterText() {
  ////useselctor is use to get the data from store whole store or any particular item of the store
  // like counter is one property of store when the  counter will update it will automaticget reprint the value is because 
  // of useselcetor its handel by own
  const count =useSelector((store)=>store.counter)
  return (
    <div>
      <h5 className="card-title">Counter &nbsp; {count}</h5>
      <p className="card-text">
       text
      </p>
    </div>
  );
}
