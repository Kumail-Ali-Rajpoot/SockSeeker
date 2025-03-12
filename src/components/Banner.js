import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
          duration: 2000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);
  return (
    <div className='h-[80vh]'>
      <img data-aos="fade-right" className='w-[40vw]' src="https://dl.airtable.com/.blockIconImages/a30bee50aeefaf4ffd8c4dc699b642c6/d3accafa"/>
    </div> 
  )
}

export default Banner