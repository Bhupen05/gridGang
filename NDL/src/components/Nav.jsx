import React from 'react'
import logo from "../assets/image.png"
import 'remixicon/fonts/remixicon.css'

function Nav() {
  return (
        <>
            <div className="nav w-full h-20 items-center px-20 flex justify-between bg-amber-400">
                <div className="logo">
                    <img className='w-30 h-30' src={logo} alt="" />
                </div>
                <div className="link uppercase flex gap-10">
                    <h3>Home</h3>
                    <h3>about</h3>
                    <h3>token</h3>
                    <h3>roadmap</h3>
                </div>
                <div className="but uppercase">
                    <h3 className='text border-2 px-4  rounded-b-2xl'><i class="ri-global-line mr-3"></i>join us</h3>
                </div> 
            </div>
        </>
  )
}

export default Nav