import React from 'react'
import './Card.css'
function Card2(props) {
  return (
    <>
    <div className="cardmain">
<img src={props.img1} alt="" />
<div className='cardfirst'><div>Customizable Team </div> <div>Plans</div></div>
<div>
Emphasize the flexibility of <br /> your sign-up options. Design a <br /> comparison table or an <br />interactive element that <br /> displays different team plans,<br /> each tailored to specific needs.
    </div>
    </div>
    
    </>
  )
}

export default Card2;