import React from 'react'


const  Card = ({image,productName,price, onClick, itemData,btnTxt, redirectProductInfo }) => {
  return (
    <div loading='lazy' id="categories" className=' w-[13rem] h-[20rem] bg-white flex flex-col justify-start py-2 px-2 items-center rounded-md shadow-md shadow-black'>
        <div className='w-full h-[50%] flex items-center justify-center border-b-[0.1em] border-zinc-500 object-cover overflow-hidden'>
        <img className='w-[90%] aspect-[3/2] object-contain' onClick={redirectProductInfo} src={image} alt="" />
        </div>
               
                <h2 className='text-[0.7em] tracking-widest font-semibold mt-4'>{productName}</h2>
                <h3 className='text-[0.77em] tracking-wide mt-2'>{`${price}`}</h3>
                <button onClick={onClick} value={itemData}  className='mt-2 w-[90%] py-2 rounded-lg text-white bg-[#3ad621]'>{btnTxt}</button>
              </div>
  )
}

export default Card