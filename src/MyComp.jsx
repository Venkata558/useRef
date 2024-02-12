import React, { useState, useEffect, useRef } from "react";
function MyComp() {
  const paraRef1 = useRef(null);
  const paraRef2 = useRef(null);
  const paraRef3 = useRef(null);

  useEffect(() => {
    console.log("Component Rendered!.");
  });

  function handleClick1() {
    paraRef1.current.style.color = "white";
    paraRef1.current.style.backgroundColor = "black";

    paraRef2.current.style.color = "";
    paraRef2.current.style.backgroundColor = "";

    paraRef3.current.style.color = "";
    paraRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    paraRef1.current.style.color = "";
    paraRef1.current.style.backgroundColor = "";

    paraRef2.current.style.color = "white";
    paraRef2.current.style.backgroundColor = "black";

    paraRef3.current.style.color = "";
    paraRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    paraRef1.current.style.color = "";
    paraRef1.current.style.backgroundColor = "";

    paraRef2.current.style.color = "";
    paraRef2.current.style.backgroundColor = "";

    paraRef3.current.style.color = "white";
    paraRef3.current.style.backgroundColor = "black";
  }

  return (
    <div className="box">
      <h2>useRef-Hook</h2>
      <button onClick={handleClick1}>Click me!</button>
      <p ref={paraRef1}>useRef Hook</p>
      <br />

      <button onClick={handleClick2}>Click me!</button>
      <p ref={paraRef2}>useRef Hook</p>
      <br />

      <button onClick={handleClick3}>Click me!</button>
      <p ref={paraRef3}>useRef Hook</p>
      <br />
    </div>
  );
}
export default MyComp;
