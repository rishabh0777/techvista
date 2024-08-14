import React from "react";

const CartCard = ({
  image,
  name,
  features,
  qty,
  price,
  remove,
  addQty,
  removeQty,
  productInfo,
  checkout,
}) => {
  return (
    <div className="w-[90vw] md:rounded-full rounded-full shadow-black shadow-sm md:px-5 h-[15vh] bg-[#fdfdfd] dark:bg-black flex  items-center py-1 px-1">
      <div
        id="remove"
        className="md:w-[10%] xsm:w-[6%] flex justify-center items-center h-full md:text-2xl sm:text-xl xsm:text-md lg:text-2xl"
      >
        <i className="ri-close-circle-fill cursor-pointer" onClick={remove}></i>
      </div>
      <div className="md:w-[8%] xsm:w-[22%] flex justify-center items-center h-full">
        <img
          src={image}
          alt=""
          className="object-contain aspect-[3/2] h-[98%] cursor-pointer"
          onClick={productInfo}
        />
      </div>
      <div className=" md:w-[40%] xsm:w-[25%] px-[0.1em] text-center h-full flex flex-col items-center justify-center md-text-2xl sm:text-[0.7em] xsm:text-[0.4em]">
        <h3 onClick={productInfo} className="font-semibold cursor-pointer">
          {name}
        </h3>
      </div>

      <div className="w-[19%] h-full flex items-center justify-evenly">
        <i
          onClick={removeQty}
          className="ri-checkbox-indeterminate-fill xsm:text-[0.9em] md:text-2xl px-1"
        ></i>
        <h2 className="md:py-2 md:px-5 xsm:py-1 xsm:px-3  flex justify-center items-center dark:bg-zinc-900 bg-white shadow-inner sm:text-[0.9em] shadow-black md:text-md xsm:text-[0.5em]">
          {qty}
        </h2>
        <i onClick={addQty} className="ri-add-box-fill xsm:text-[0.9em] md:text-2xl px-1"></i>
      </div>
      <div className="w-[13%] h-full  flex justify-center items-center md:text-xl xsm:text-[0.5em]">
        <h3>{price}</h3>
      </div>
      <button onClick={checkout} className="bg-[#3ad621] flex text-white xsm:px-2 xsm:py-1 md:px-4 py-3 md:rounded-full xsm:rounded-3xl xsm:text-[0.4em] md:text-[0.8em]">
        Buy Now
      </button>
    </div>
  );
};

export default CartCard;
