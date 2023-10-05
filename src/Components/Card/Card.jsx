import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <>
    <div className="cardmain">
<img src={props.img1} alt="" />
<div className='cardfirst'><div>Team Collaboration</div> <div>Showcase</div></div>
<div>
    Since the focus is on signing up <br /> a team, the landing page could <br /> prominently showcase how <br /> your platform enhances team <br />collaboration
    </div>
    </div>
    
    </>
  )
}

export default Card;