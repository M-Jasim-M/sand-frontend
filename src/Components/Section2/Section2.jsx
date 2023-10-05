import React from 'react'
import './Section2.css'
import Card from '../Card/Card';
import card1 from '../../Asserts/Images/card1.svg'
import card2 from '../../Asserts/Images/card2.png'
import card3 from '../../Asserts/Images/card3.svg'
import Card2 from '../Card/Card2';
import Card3 from '../Card/Card3';

function Section2() {
  return (
    <>
    <div className="section2">
<div className="twotopmian">
    <div>Our Cool Options <br/> To sign A Team</div>
    <div>Lorem ipsum text is used by UX designers . the design to complete her <br /> to create wireframeprototype to wireframe.Lorem ipsum is a Latin text that <br /> was originally used as a placeholder for content that was not written yet.</div>
</div>

<div className="carddiv">
    <Card img1={card1}/>
    <Card2 img1={card2}/>
    <Card3 img1={card3}/>
</div>

    </div>
    </>
  )
}

export default Section2;