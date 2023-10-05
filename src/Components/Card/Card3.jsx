import React from 'react'
import './Card.css'
function Card3(props) {
  return (
    <>
    <div className="cardmain">
<img src={props.img1} alt="" />
<div className='cardfirst'><div>Invitation & Onboarding</div> <div> Flow</div></div>
<div>
Visualize the steps involved in <br /> adding team members and guide <br /> users through a quick tour of the <br /> onboarding process.
    </div>
    </div>
    
    </>
  )
}

export default Card3;