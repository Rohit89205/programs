import React, { useEffect } from "react";

const ChildComp = (handleClick) => {
    
  useEffect(() => {
    console.log("is running");
  }, [handleClick]);

  return <div>ChildComp</div>;
};

export default ChildComp;
