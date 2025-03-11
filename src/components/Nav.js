import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
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
        <h3 className='uppercase text-[2.5vmax] font-[500] text-gray-950'>sockseeker</h3>
        <thead>
            <tr className='flex gap-[6vw] text-[1.3vmax] text-slate-950'>
                <th className='nav-links'>Home</th>
                <th className='nav-links'>Kids Socks</th>
                <th className='nav-links'>Mens Socks</th>
                <th className='nav-links'>Lady Socks</th>
            </tr>
        </thead>
    </nav>
  )
}

export default Nav;