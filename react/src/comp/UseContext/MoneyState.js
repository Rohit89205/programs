import React from "react";
import MyContext from "./UseContextComp";

const MoneyState = (props) => {

  const yojna = {
    money: "1000",
    ration: true,
    pension: "500",
  };

  return (
    <MyContext.Provider value={{yojna}}>
        {props.children}
    </MyContext.Provider>
  );
};

export default MoneyState;
