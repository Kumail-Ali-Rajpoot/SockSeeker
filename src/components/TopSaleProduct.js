import {React,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const TopSaleProduct = () => {
    useEffect(()=>{
        AOS.init({
            duration:2000,
            once:true,
            fade:200,
        })
    },[])
  return (    
    <div data-aos="fade-down" className= 'shadow-xl shadow-gray-800 relative min-[250px] max-[400px] w-[20vw] h-[10vw] min-h-[400px] max-h-[700px] bg-white'>
        <p className="capitalize bg-green-600 absolute top-0 left-0 p-1 text-white">trend</p>
        <img className='w-[100vw]' src="https://img.drz.lazcdn.com/g/kf/S14e2e3bd99ff4c3686f5ce3de58634cfI.jpg_200x200q75.avif" alt="" />
        <a href="https://www.daraz.pk/products/pack-of-3-ladies-dot-print-thumb-socks-high-quality-imported-i416869424-s1978386436.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Asocks%253Bnid%253A416869424%253Bsrc%253ALazadaMainSrp%253Brn%253A0f3897b3e0066cf63855eabd2c7b8707%253Bregion%253Apk%253Bsku%253A416869424_PK%253Bprice%253A299%253Bclient%253Adesktop%253Bsupplier_id%253A6005018832219%253Bbiz_source%253Ahttps%253A%252F%252Fwww.daraz.pk%252F%253Bslot%253A2%253Butlog_bucket_id%253A470687%253Basc_category_id%253A1756%253Bitem_id%253A416869424%253Bsku_id%253A1978386436%253Bshop_id%253A804990%253BtemplateInfo%253A1104_L%2523-1_A3_C%2523&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=299&priceCompare=skuId%3A1978386436%3Bsource%3Alazada-search-voucher%3Bsn%3A0f3897b3e0066cf63855eabd2c7b8707%3BoriginPrice%3A29900%3BdisplayPrice%3A29900%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1741706886201&ratingscore=4.214285714285714&request_id=0f3897b3e0066cf63855eabd2c7b8707&review=42&sale=181&search=1&source=search&spm=a2a0e.searchList.list.2&stock=1"  className='text-gray-500 hover:text-gray-700 hover:underline cursor-pointer'>Pack of 3 - Ladies Dot Print Thumb Socks High Quality Imported</a>
        <p className="text-left text-orange-600">RS. 299</p>
        <p className="absolute left-0 bottom-0 capitalize text-gray-400">daraz product</p>
    </div>
  )
}

export default TopSaleProduct