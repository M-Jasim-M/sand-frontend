import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Asserts/Images/logo.svg'
import { Icon } from '@iconify/react';

function Navbar() {
const[side , setSide] = useState(true);

const toogle = ()=>{
  setSide(!side);
}
  return (
    <>
    <div className="mainnav">
<div className='first'>
<img src={logo} alt="" />
SEND
</div>

<div className={side?"resright":"resright2"}>

<div className="second">
<li><select name="" id="">
    <option value="">How it Works</option>
    <option value="">How it Works</option>
    <option value="">How it Works</option>
    </select></li>


<li>
<select name="" id="">
    <option value="">Features</option>
    <option value="">Features</option>
    <option value="">Features</option>
    </select>
</li>

<li>Pricing</li>

<li>
<select name="" id="">
    <option value="">Resources</option>
    <option value="">Resources</option>
    <option value="">Resources</option>
    </select>

</li>
</div>

<div className="third">
<div>Log in</div>
<div>Sign Up</div>
</div>


</div>

<div className="four" onClick={toogle}>
<Icon icon="fontisto:nav-icon-a" />
</div>
    </div>


    </>
  )
}

export default Navbar;
