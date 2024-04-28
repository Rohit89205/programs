import React, { useReducer } from "react";

const UseReducerComp = () => {
  const countReducer = (state, action) => {
    console.log("Hello");
    console.log(state, "state");
    console.log(action, "action");

    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, name: (state.name = "Rahul") };

      case "DECREMENT":
        console.log(state.count, 'state count')
        // if(state.count > 0){
            return { count: state.count > 0 ? state.count - 1 : state.count, name: (state.name = "Sourabh") };
        // }

      case "RESET":
        return { count: 10, name: "Rohit" };

      default:
        return state;
    }
    // if (action.type == "INCREMENT") {
    //   return { count: state.count + 1, name: (state.name = "Rahul") };
    // } else if (action.type == "DECREMENT") {
    //   return { count: state.count - 1, name: (state.name = "Sourabh") };
    // } else if (action.type == "RESET") {
    //   return { count: 10, name: "Rohit" };
    // } else {
    //   return state;
    // }
  };

  const [value, dispatch] = useReducer(countReducer, {
    count: 10,
    name: "Rohit",
  });

  return (
    <>
      <h1>
        {value.count}, {value.name}
      </h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
      {/* <button onClick={() => dispatch({ type: "RESET" })}>RESET</button> */}
    </>
  );
};

export default UseReducerComp;
