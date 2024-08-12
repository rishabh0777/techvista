import React from 'react'
import { useSelector } from 'react-redux'

const ProductInfo = () => {
  const itemInfo = useSelector((state)=> state.productInfo.selectedProductInfo)

  return (
    <main className="w-screen bg-[#0b0b0b]">
      <div
        id="landingPage"
        className="w-[100vw] bg-[#ccc] h-[100vh] z-10 flex flex-col items-center justify-center"
      >
        <div
          id="data"
          className="w-[95%] min-h-[85vh] p-4 relative z-[15] mx-[2.5%] lg:mt-[7.5%] xsm:mt-[20%] sm:mt-[14%] bg-white shadow-lg shadow-black rounded-3xl overflow-hidden flex md:flex-row xsm:flex-col items-center box-sizing justify-items-center gap-5 py-5"
        >
          <div id="left" className=' md:w-1/2 xsm:w-full md:h-full xsm:h-[45%] items-center flex justify-center'>
            <img 
            className='w-[90%] h-[90%] aspect-[2/3] object-contain'
            src={itemInfo.image} 
            alt="" />
          </div>
          <div id="right" className=' md:w-1/2 md:h-[85vh] xsm:w-full xsm:h-1/2 px-2  py-2 flex flex-col justify-start '>
            <h1 className='md:text-[2rem] xsm:text-[1rem] tracking-tight font-medium md:mt-[8rem]'>{itemInfo.name}</h1>
            <p className='md:text-4xl xsm:text-2xl tracking-wide font-black xsm:mt-1 md:mt-8'>{itemInfo.brand}</p>
            <h2 className='md:text-2xl xsm:text-xl mt-8 tracking-tight'>{itemInfo.features}</h2>
            <h3 className='md:text-[3rem] xsm:text-[1.5rem] tracking-tighter mt-4'>${itemInfo.price}</h3>
                <button className='bg-[#3ab611] md:py-3 md:px-2 xsm:py-2 xsm:px-1 mt-8 xsm:text-[0.8em] md:text-[0.9em] text-white md:w-[12rem] xsm:w-[6rem] rounded-3xl'>Buy Now</button>
          </div>
      </div>
      </div>
    </main>  )
}

export default ProductInfo