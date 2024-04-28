import React, { useMemo, useState } from "react";

const UseMemoComp = () => {
  const [value, setValue] = useState("");

  const calcResult = (input) => {

  }

  return (
    <>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  )
};

export default UseMemoComp;
