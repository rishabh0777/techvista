import React from 'react'
import { useNavigate } from 'react-router-dom'


const Ordered = () => {
const navigate = useNavigate()

  return (
   <>
    <main className="w-screen bg-[#ccc] dark:bg-[#555] pb-4">
      <div
        id="Ordered"
        className="w-[100vw] relative z-10 flex flex-col items-center justify-center"
      >
        <div
          id="ordered_Comfirmation"
          className="w-[95%] min-h-[85vh] p-4 relative z-[15] mx-[2.5%] lg:mt-[7.8%] xl:mt-[9.5%] xsm:mt-[20%] sm:mt-[20%] md:mt-[12.5%]  xxl:mt-[10%] bg-white dark:bg-zinc-900 dark:text-white shadow-lg shadow-black rounded-3xl overflow-hidden flex flex-col items-center box-sizing justify-center gap-5 py-5"
        >
        <div className="lg:w-[50vw] lg:h-[30vw] xsm:w-[90vw] xsm:h-[50vh] p-2 bg-white dark:bg-black shadow-md shadow-black flex flex-col items-center justify-center">
          <h1 className='md:text-xl xsm:text-emerald-300  dark:text-white'>Thanks For Shopping with us</h1>
          <button 
          onClick={()=>navigate('/', {replace:true})}
          className='md:px-5 md:py-3 xsm:px-8 xsm:py-3 bg-[#3ad611] shadow-sm rounded-3xl md:text-[1em] xsm:text-[0.8em] text-white mt-8'>Go Home</button>
        </div>
        </div>
      </div>
    </main>
   </>
  )
}

export default Ordered