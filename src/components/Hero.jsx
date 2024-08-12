import React, { useEffect, useState } from "react";
import heroPosterImg from "../assets/images/airpodHero.png";
import Cursor from "./Cursor";
import products from "../data/products.json";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../categorySlice";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const landingPage = document.getElementById("heroPoster");
      const rect = landingPage.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        setIsCursorVisible(true);
      } else {
        setIsCursorVisible(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getCategoryItems = (categoryIndex) => {
    const categoryItems = products.categories.at(categoryIndex).items;
    dispatch(setSelectedCategory(categoryItems));
    console.log(categoryItems);

    navigate("/categoriesItems", { replace: true });
  };

  return (
    <>
      <Cursor position={cursorPosition} isVisible={isCursorVisible} />
      <main className="w-screen bg-[#ccc">
        <div
          id="landingPage"
          className="w-full bg-[#ccc] lg:min-h-[100vh] xsm:min-h-[300vh] sm:min-h-[170vh]  relative z-10 flex flex-col items-center justify-center"
        >
          <div
            id="heroPoster"
            className="lg:w-[95%] lg:h-[87vh] xsm:w-[95vw] xsm:h-[70vh] relative z-[15] mx-[2.5%] lg:mt-[7.8%] xsm:mt-[20%] sm:mt-[21%] md:mt-[12.5%]  bg-white shadow-lg shadow-black rounded-3xl overflow-hidden flex items-center justify-center box-sizing lg:cursor-none "
          >
            <div className="relative xsm:h-screen xsm:w-full sm:w-full sm:h-full flex flex-col ">
              <div className='w-full h-[40%] flex justify-center items-start'>
              <h1 className="lg:text-[10rem] md:text-[7rem] sm:text-[5rem] xsm:text-[3.8rem] xsm:mt-[14.3rem] msm:mt-[19.1rem] sm:mt-[9.3rem] md:mt-[18rem] bg-blue-400 h-0  tracking-mostWidest font-black lg:mt-8">
                AIRPOD  
              </h1>
              </div>
              <img
                src={heroPosterImg}
                alt=""
                className="absolute md:w-[14rem] lg:w-[19rem] xsm:w-[12rem] sm:w-[12rem] z-[10] left-1/2 md:top-[65%] md:-translate-y-[65%] xsm:top-[50%] transform xsm:-translate-y-1/2 translate-x-[-50%]"
              />
              <div className="w-full h-[60%] flex items-end justify-center">
              <p className="lg:text-[1rem] xsm:text-[0.5em] md:text-[0.6em] font-semibold text-zinc-800 tracking-widest font-poppins left-[50%] z-[12] mb-10">
                Unleashing the Power of Modern Tech
              </p>
              </div>
              
            </div>
          </div>
          <div className="lg:w-[95%] lg:h-[86vh] md:h-[50%] xsm:w-[95%] xsm:min-h-[60%] relative z-[15] mx-[2.5%] lg:mt-[2%] xsm:mt-[4%] bg-white shadow-lg shadow-black rounded-3xl overflow-hidden flex flex-col gap-2 items-center justify-start box-sizing border-box px-2 py-2">
            <h1 className="font-semibold lg:text-[5rem] xsm:text-[2rem] sm:text-[3rem]">Category</h1>
            <div className="w-full h-[90%] px-2 py-2 grid xsm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-row-2 gap-2 items-center justify-items-center">
              {products.categories.slice(0, 7).map((value, index) => {
                return (
                  <Card
                    onClick={() => getCategoryItems(index)}
                    key={index}
                    image={`${value.items[index].image}`}
                    productName={value.name}
                    price={`Starting Price $${value.items[index].price}`}
                    btnTxt={`Open`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
