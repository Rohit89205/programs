import React, { useCallback, useState } from "react";
import ChildComp from "./ChildComp";

const UseCallbackComp = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

//   const handleClick = () => setCounter1(counter1 + 1);

  const handleClick = useCallback(() => setCounter1(counter1 + 1), [counter1]);



  return (
    <>
    {/* <h1>counter1: {counter1}</h1> */}
    <h1>counter2: {counter2}</h1>
    <ChildComp handleClick={handleClick} />
    <button onClick={() => setCounter2(counter2 + 1)}>INC</button>
    </>
  )
};

export default UseCallbackComp;
