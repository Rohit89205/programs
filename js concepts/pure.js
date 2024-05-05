function impurefn(x, y) {
  let temp = Math.floor(Math.random() * 10);
  return x + y + temp;
}
console.log(impurefn(3, 5));


function purefn(x, y) {
  return x + y;
}
console.log(purefn(3, 5));

import React from 'react'

const Title = ({title}) => {
  return (
    <>
        <div className='section-title'>
            <h2 className='title'>{title}</h2>
        </div>
    </>
  )
}

export default Title;