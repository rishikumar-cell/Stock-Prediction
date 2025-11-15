import React from 'react'
import Button from "./Button"

const Home = () => {
  return (
    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark'>
            <h1 className='text-light'>Welcome to Stcok Prediction Portal</h1>
            <p className='text-light lead'>Lorem, ipsum dolor sit amet consectetur adipisicing
                 elit. Quisquam totam nisi facere sit. Quod odit eum omnis.
                  Cum, amet! Voluptas, id eum? Distinctio velit praesentium cumque eos expedita obcaecati dignissimos!

            </p>
            <Button text="Login" class="btn-outline-info" />
        </div>
    </div>
    </>
  )
}

export default Home