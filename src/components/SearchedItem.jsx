import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../cartSlice'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import { setSelectedProductInfo } from '../../productInfoSlice'

const SearchedItem = () => {
    const searchItem = useSelector((state)=> state.searchItem.selectedSearch)
    const user = useSelector((state)=> state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const handleAddToCart = (product) => {
         if (user) {
            dispatch(addToCart({ userId: user.uid, product }));
          }else{
            navigate('/login', {replace:true})
          }
        }

        const HandleProductInfo = (product)=>{
          dispatch(setSelectedProductInfo(product))
          navigate('/productInfo', {replace: true})
          console.log(product)
        }
        

  return (
    <main className="w-screen bg-[#0b0b0b]">
      <div
        id="landingPage"
        className="w-[100vw] bg-[#ccc] min-h-[80vh] relative z-10 flex flex-col items-center justify-center"
      >
        <div
          id="searchedItem"
          className="w-[95%] min-h-[85vh] p-4 relative z-[15] mx-[2.5%] lg:mt-[7.5%] xsm:mt-[20%] sm:mt-[14%] bg-white shadow-lg shadow-black rounded-3xl overflow-hidden  flex flex-col items-center box-sizing justify-items-center gap-5"
        >
          <h1 className="text-2xl pb-2 tracking-wider">Searched item</h1>
          <div className="w-full  border-b-[0.01em] border-zinc-500"></div>
          <div className="w-full px-2 py-2 grid xsm:grid-cols-1n sm:grid-cols-2 lg:grid-cols-4 xsm:gap-2 lg:gap-4 justify-items-center">
           {
            searchItem?(
                    
                    <Card 
                  key={searchItem.id} 
                  image={searchItem.image} 
                  productName={searchItem.name}
                  price={`Price $${searchItem.price}`}
                  btnTxt={`Add to Cart`}
                  onClick={()=>{handleAddToCart(searchItem)}}
                  redirectProductInfo={()=>HandleProductInfo(searchItem)}
                  />
                
            ):(
                <p>Item not available</p>
            )
}
          </div>
      </div>
      </div>
    </main>
  )
}

export default SearchedItem