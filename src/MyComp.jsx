import React, { useState, useEffect, useRef } from "react";
function MyComp() {
  const b1 = document.getElementById("btn1");
  const b2 = document.getElementById("btn2");
  const b3 = document.getElementById("btn3");

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  /*useEffect(() => {
    console.log("Component Rendered!.");
  });*/

  function handleClick1() {
    b1.style.color = "black";
    b1.style.backgroundColor = "white";

    b2.style.color = "";
    b2.style.backgroundColor = "";

    b3.style.color = "";
    b3.style.backgroundColor = "";

    inputRef1.current.style.color = "white";
    inputRef1.current.style.backgroundColor = "black";

    inputRef2.current.style.color = "";
    inputRef2.current.style.backgroundColor = "";

    inputRef3.current.style.color = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    b1.style.color = "";
    b1.style.backgroundColor = "";

    b2.style.color = "black";
    b2.style.backgroundColor = "white";

    b3.style.color = "";
    b3.style.backgroundColor = "";

    inputRef1.current.style.color = "";
    inputRef1.current.style.backgroundColor = "";

    inputRef2.current.style.color = "white";
    inputRef2.current.style.backgroundColor = "black";

    inputRef3.current.style.color = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    b1.style.color = "";
    b1.style.backgroundColor = "";

    b2.style.color = "";
    b2.style.backgroundColor = "";

    b3.style.color = "black";
    b3.style.backgroundColor = "white";

    inputRef1.current.style.color = "";
    inputRef1.current.style.backgroundColor = "";

    inputRef2.current.style.color = "";
    inputRef2.current.style.backgroundColor = "";

    inputRef3.current.style.color = "white";
    inputRef3.current.style.backgroundColor = "black";
  }

  return (
    <div className="box">
      <h2>useRef-Hook</h2>
      <button id="btn1" onClick={handleClick1}>
        Click me!
      </button>
      <p ref={inputRef1}>useRef Hook</p>
      <br />

      <button id="btn2" onClick={handleClick2}>
        Click me!
      </button>
      <p ref={inputRef2}>useRef Hook</p>
      <br />

      <button id="btn3" onClick={handleClick3}>
        Click me!
      </button>
      <p ref={inputRef3}>useRef Hook</p>
      <br />
    </div>
  );
}
export default MyComp;
