import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";

export default function Buttons() {
  const Dispatch = useDispatch();
  const val =useRef()
  const handelInc = () => {
    Dispatch({ type: "INCREMENT" });
  };
  // this is the handel button in dispatch
  const handelDec = () => {
    Dispatch({ type: "DECREMENT" });
  };
  const handelADD = () => {
    Dispatch({ type: "ADDITION" });
  };
   const handelADDval = () => {
     Dispatch({ type: "Addval",payload:{
      num:val.current.value

     },
    });
    val.current.value="" 
   };
    const handelDElval = () => {
      Dispatch({ type: "Delval" });
    };
  return (
    <>
      <div>
        <button type="button" onClick={handelInc} class="btn btn-primary">
          Add 1
        </button>{" "}
        &nbsp;
        <button type="button" onClick={handelADD} class="btn btn-secondary">
          Add 5
        </button>
        &nbsp;
        <button type="button" onClick={handelDec} class="btn btn-success">
          less 1
        </button>
        {/* <button type="button" class="btn btn-danger">
        Danger
        </button>
        <button type="button" class="btn btn-warning">
        Warning
        </button>
        <button type="button" class="btn btn-info">
        Info
        </button>
        <button type="button" class="btn btn-light">
        Light
        </button>
        <button type="button" class="btn btn-dark">
        Dark
        </button>
        
        <button type="button" class="btn btn-link">
        Link
      </button> */}
      </div>
      <div style={{marginTop :"2rem"}}>
        <input ref={val} placeholder="Enter number"/>
        &nbsp;
        <button  type="button" onClick={handelADDval} class="btn btn-warning">
        Add Input
        </button>
        &nbsp;
        <button type="button" onClick={handelDElval} class="btn btn-dark">
        Subtract Input
        </button>
      </div>
    </>
  );
}
