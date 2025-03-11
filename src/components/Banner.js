import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);
  return (
    <div>
        <h3 data-aos="fade-up" className='text-[3.7vmax] capitalize bg-slate-200/50 text-slate-500 text-center font-[500] mt-[4vw]'>
            Buy socks for your family on good price from sockSeeker
        </h3>
        <pre data-aos="fade-up" className='text-[3vmax] capitalize text-white text-center bg-slate-600/80'>
            <p data-aos="fade-down">Sale On 75% Discount</p>
            <button data-aos="fade-up" className='text-[1.5vmax] mb-[1vmax] border-2 border-green-600 hover:bg-green-600 p-[0.5vw] font-[400] w-[250px] rounded-[0.5rem]'>
                Shop Now On Discount
            </button>
        </pre>
        <img src="https://images.prismic.io/dutchlabelshop/ed7f5a37-685c-47e5-8b75-8321a45c0f09_christmas-xmas-family-holiday-winter-reduced.jpg?auto=compress,format" className='w-[100vw] absolute top-[-15vw] z-[-1]' alt="" />
    </div>
  )
}

export default Banner