import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadCart, addToCart } from '../../cartSlice'


const ProductInfo = () => {
  const itemInfo = useSelector((state)=> state.productInfo.selectedProductInfo)
  const user = useSelector((state)=>state.auth.user)
  const dispatch = useDispatch()

   
  useEffect(() => {
    if (user) {
      dispatch(loadCart(user.uid));
    }
  }, [user, dispatch]);
 

  const handleAddToCart = (product) => {
    if (user) {
      dispatch(addToCart({ userId: user.uid, product }));
    } else {
      console.error('User not logged in');
    }
  };

  return (
    <main className="w-screen bg-white dark:bg-zinc-800 mb-2">
      <div
        id="landingPage"
        className="w-[100vw] min-h-[100vh] z-10 flex flex-col items-center justify-center"
      >
        <div
          id="data"
          className="w-full min-h-[85vh] p-4 relative z-[15] md:mt-[10vh] mt-[7vh] bg-white dark:bg-zinc-800 dark:text-white overflow-hidden flex md:flex-row xsm:flex-col items-center box-sizing justify-items-center gap-5 py-5"
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
                <button 
                onClick={()=>handleAddToCart(itemInfo)}
                className='bg-[#3ab611] md:py-3 md:px-2 xsm:py-2 xsm:px-1 mt-8 xsm:text-[0.8em] md:text-[0.9em] text-white md:w-[12rem] xsm:w-[6rem] rounded-3xl'>Add to cart</button>
          </div>
      </div>
      </div>
    </main>  )
}

export default ProductInfo