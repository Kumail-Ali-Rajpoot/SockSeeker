import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import {useEffect} from "react";
const Nav = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      // offset:100,
      once:true,
    })
  },[])
  return (
    <nav data-aos="fade-down" className='flex justify-around items-center relative bg-slate-200'>
        <h3 className='uppercase flex text-[2.5vmax] items-center font-[500] text-gray-950'><PiShoppingBagOpenBold className='text-[3vmax]' />sockseeker</h3>
        <thead>
            <tr className='flex gap-[6vw] text-[1.3vmax] text-slate-950'>
                <th className='nav-links'>Home</th>
                <th className='nav-links'>Kids Socks</th>
                <th className='nav-links'>Men Socks</th>
                <th className='nav-links'>Lady Socks</th>
            </tr>
        </thead>
    </nav>
  )
}

export default Nav;