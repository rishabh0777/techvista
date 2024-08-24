import React,{useEffect} from "react";
import Card from "./Card";
import { loadCart, addToCart, clearCart } from '../../cartSlice';
import { useDispatch, useSelector } from "react-redux";
import products from "../data/products.json";
import { useNavigate } from "react-router-dom";
import { setSelectedProductInfo } from "../../productInfoSlice";



const Product = () => {
    const user = useSelector((state)=> state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()


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

    const HandleProductInfo = (product)=>{
      dispatch(setSelectedProductInfo(product))
      navigate('/productInfo', {replace: true})
      console.log(product)
    }


  


  return (
    <main className="w-screen bg-[#0b0b0b]">
      <div
        id="landingPage"
        className="w-[100vw] bg-[#ccc] dark:bg-[#555] min-h-[100vh] relative z-10 flex flex-col items-center justify-center"
      >
        <div
          id="allProduct"
          className="w-[95%] min-h-[85vh] p-4 relative z-[15] mx-[2.5%] lg:mt-[7.8%] xl:mt-[9.5%] xsm:mt-[20%] sm:mt-[20%] md:mt-[12.5%] bg-white dark:bg-zinc-900 dark:text-white shadow-lg shadow-black rounded-3xl overflow-hidden  flex flex-col items-center box-sizing justify-items-center gap-5"
        >
          <h1 className="text-2xl pb-2 tracking-wider">All Product's</h1>
          <div className="w-full  border-b-[0.01em] border-zinc-500"></div>
          <div className="w-full px-2 py-2 grid xsm:grid-cols-1n lg:grid-cols-4 xsm:gap-2 md:grod-cols-3 lg:gap-4 justify-items-center">
            {
              products.categories.slice(0,7).map((category, index)=>{
                return category.items.slice(0,8).map((item)=>{
                  return(
                  <Card 
                  key={item.id} 
                  image={item.image} 
                  productName={item.name}
                  price={`$${item.price}`}
                  btnTxt = 'Add to cart'
                  onClick={()=>{handleAddToCart(item)}}
                  redirectProductInfo={()=>HandleProductInfo(item)}
                  />
                )})
              })
            }
          </div>
      </div>
      </div>
    </main>
  );
};

export default Product;
