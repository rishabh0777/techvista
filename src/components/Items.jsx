import React from 'react'
import Card from './Card'
import { addToCart } from '../../cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedProductInfo } from '../../productInfoSlice'
import { useNavigate } from 'react-router-dom'


const Items = () => {
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state)=> state.auth.user)

  const handleAddToCart = (product) => {
    if (user) {
      dispatch(addToCart({ userId: user.uid, product }));
    } else {
      console.error('User not logged in');
    }
  };

  const HandleProductInfo = (product)=>{
    dispatch(setSelectedProductInfo(product))
    navigate('/productInfo', {replace: true})
    console.log(product)
  
  }

  return (
    <>
  <main className="w-screen bg-[#ccc] dark:bg-[#555]">
      <div
        id="landingPage"
        className="w-[100vw] min-h-[100vh] relative z-10 flex flex-col items-center justify-center"
      >
        <div
          id="allProduct"
          className="w-[95%] min-h-[85vh] p-4 relative z-[15] mx-[2.5%] lg:mt-[7.5%] xl:mt-[9.5%] xsm:mt-[20%] sm:mt-[14%]  xxl:mt-[10%] bg-white dark:bg-zinc-900 dark:text-white shadow-lg shadow-black rounded-3xl overflow-hidden  flex flex-col items-center box-sizing justify-items-center gap-5"
        >
          <h1 className="text-2xl pb-2 tracking-wider">All Item's</h1>
          <div className="w-full  border-b-[0.01em] border-zinc-500"></div>
          <div className="w-full px-2 py-2 grid xsm:grid-cols-1n sm:grid-cols-2 lg:grid-cols-4 xsm:gap-2 lg:gap-4 justify-items-center">
          {
  selectedCategory?(selectedCategory.map((item, index)=>{
    return(
      <Card 
      
      key={item.id} 
      image={item.image} 
      productName={item.name}
      price={`Price $${item.price}`}
      btnTxt={`Add to Cart`}
      onClick={()=>{handleAddToCart(item)}}
      redirectProductInfo={()=>HandleProductInfo(item)}
      />
    
      )
  })):(
    <p>Item not available</p>
  )
}
          </div>
      </div>
      </div>
    </main>


    </>
  )
}

export default Items

