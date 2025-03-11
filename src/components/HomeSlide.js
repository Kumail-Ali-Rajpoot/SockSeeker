import {React,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import TopSaleProduct from './TopSaleProduct';

const HomeSlide = () => {
    useEffect(()=>{
        AOS.init({
            duration:2000,
            once:true,
            fade:200,
        })
    },[])
  return (
    <div data-aos="fade-down" className='w-[98vw] p-[2vw] self-center mt-[3vw] h-fit bg-slate-200 relative'>
        <div className="text-center flex flex-wrap">
            <pre className="w-[98vw] text-center font-[Roboto] flex flex-col">
            <p className="text-slate-500">Most sold socks by peoples on daraz</p>
            <h4 className="text-[3vmax] capitalize">Top Sales Of Socks</h4>
            </pre>
            <div>
                <TopSaleProduct></TopSaleProduct>
            </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default HomeSlide