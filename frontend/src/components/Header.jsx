import React from 'react'
import Button from "./Button"
const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-5 align-items-start'>
        <a href="" className='navbar-brand text-light rounded'>Stock Prediction</a>
        <div>
           <Button text="Login" class="btn-outline-info"/>
           <Button text="Register" class="btn-outline-info"/>
        </div>
    </nav>
    </>
  )
}

export default Header