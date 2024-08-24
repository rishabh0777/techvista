import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCart, clearCart, removeItemFromCart } from "../../cartSlice";
import CartCard from "./CartCard";
import { setSelectedProductInfo } from "../../productInfoSlice";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);
  const user = useSelector((state) => state.auth.user);
  const [qty, setQty] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (user) {
      dispatch(loadCart(user.uid));
    }
  }, [user, dispatch]);

  useEffect(() => {
    // Initialize quantities and calculate the initial total price
    const initialQty = {};
    let initialTotalPrice = 0;
    let initialTotalItems = 0;

    cartItems.forEach((item) => {
      initialQty[item.id] = { quantity: 1, price: item.price };
      initialTotalPrice += item.price;
      initialTotalItems += 1;
    });

    setQty(initialQty);
    setTotalPrice(initialTotalPrice);
    setTotalItems(initialTotalItems);
  }, [cartItems]);

  useEffect(() => {
    // Calculate total price and total items whenever the quantity state changes
    let newTotalPrice = 0;
    let newTotalItems = 0;

    Object.values(qty).forEach((item) => {
      newTotalPrice += item.price;
      newTotalItems += item.quantity;
    });

    setTotalPrice(newTotalPrice);
    setTotalItems(newTotalItems);
  }, [qty]);

  if (cartStatus === "loading") {
    return <div>Loading...</div>;
  }

  const removeQty = (productId) => {
    setQty((prevQuantities) => {
      const newQty = (prevQuantities[productId]?.quantity || 1) - 1;
      const price = cartItems.find((item) => item.id === productId).price;
      return {
        ...prevQuantities,
        [productId]: { quantity: newQty, price: price * newQty },
      };
    });
  };

  const addQty = (productId) => {
    setQty((prevQuantities) => {
      const newQty = (prevQuantities[productId]?.quantity || 1) + 1;
      const price = cartItems.find((item) => item.id === productId).price;
      return {
        ...prevQuantities,
        [productId]: { quantity: newQty, price: price * newQty },
      };
    });
  };

  const removeItem = (product) => {
    dispatch(removeItemFromCart({ userId: user.uid, product }));
    setQty((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[product.id];
      return newQuantities;
    });
  };

  const HandleProductInfo = (product) => {
    dispatch(setSelectedProductInfo(product));
    navigate("/productInfo", { replace: true });
  };

  const totalItem = {
    price: totalPrice,
    item: totalItems,
  }

  const checkout = (product)=>{
    dispatch(setSelectedProductInfo(product))
    navigate("/checkout", {replace:true})
  }

  
  
  const checkoutWithAllPurchase = (totalPrice)=>{
    dispatch(setSelectedProductInfo(totalItem))
    navigate("/checkout", {replace:true})
  }

  const handleEmpty = ()=>{
    user?(navigate('/product', {replace:true})):(navigate('/login', {replace:true}))
  }

  return (
    <main className="w-screen bg-[#ccc] dark:bg-[#555] pb-4">
      <div
        id="cart"
        className="w-[100vw] relative z-10 flex flex-col items-center justify-center"
      >
        <div
          id="cartItem"
          className="w-[95%] min-h-[85vh] p-4 relative z-[15] mx-[2.5%] lg:mt-[7.8%] xl:mt-[9.5%] xsm:mt-[20%] sm:mt-[20%] md:mt-[12.5%] bg-white dark:bg-zinc-900 dark:text-white shadow-lg shadow-black rounded-3xl overflow-hidden flex flex-col items-center box-sizing justify-items-center gap-5 py-5"
        >
          <h1 className="text-2xl pb-2 tracking-wider">Shopping Cart</h1>
          <div className="w-full border-b-[0.01em] border-zinc-500"></div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <>
                <CartCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={`$${(qty[item.id]?.price || item.price).toFixed(2)}`}
                  removeQty={() => removeQty(item.id)}
                  addQty={() => addQty(item.id)}
                  remove={() => removeItem(item)}
                  qty={qty[item.id]?.quantity || 1}
                  productInfo={() => HandleProductInfo(item)}
                  checkout={()=> checkout(item)}
                />
              </>
            ))
          ) : (
            <div className="text-[8vw] font-bold h-[80vh] w-full flex items-center justify-center flex-col"><h3>Your Cart is Empty</h3> <button onClick={handleEmpty} className="text-[3vw] mt-8 bg-[#3ad611] px-4 py-3 rounded-3xl text-white shadow-md shadow-black">add some item to cart</button></div>
          )}
          {cartItems.length > 0 && (
            <div className="lg:w-[90%] xsm:w-full xsm:h-[10vh] md:h-[12%] mt-5 bg-white dark:bg-black shadow-lg shadow-black rounded-full flex py-3 items-center">
              <div className="w-[35%] h-full px-1 py-1 flex justify-center items-center border-r-[0.001em] border-zinc-700">
                <h2 className="md:text-xl xsm:text-[0.5em] font-bold tracking-widest">
                  Total Items: {totalItems}
                </h2>
              </div>
              <div className="w-[35%] h-full px-1 py-1   flex justify-center items-center border-r-[0.001em] border-zinc-700">
                <h2 className="md:text-xl xsm:text-[0.5em] font-bold tracking-widest">
                  Total Price: ${totalPrice.toFixed(2)}
                </h2>
              </div>
              <div className="w-[30%] h-full px-1 py-1 flex justify-center items-center">
                <button onClick={()=>checkoutWithAllPurchase(totalItem)} className="md:px-8 md:py-3 xsm:px-4 xsm:py-2  rounded-3xl md:text-[0.9em] xsm:text-[0.6em] tracking-wide text-white bg-[#3bf611]">
                  Buy All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CartComponent;
