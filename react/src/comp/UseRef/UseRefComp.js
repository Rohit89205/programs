import React, { useRef } from 'react'

const UseRefComp = () => {
    const myRef = useRef(null);

    console.log(myRef, 'my erf')

    const myFocusInput = () => {
        myRef.current.focus();
    }
  return (
    <div>
        <input ref={myRef} type="text" />
        <button onClick={myFocusInput}>Focus</button>
    </div>
  )
}

export default UseRefComp