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
      <main className="w-screen">
        <div
          id="landingPage"
          className="w-full bg-[#ccc] dark:bg-[#555] lg:min-h-[100vh] xsm:min-h-[300vh] sm:min-h-[170vh]  relative z-10 flex flex-col items-center justify-center"
        >
          <div
            id="heroPoster"
            className="w-[95%] sm:h-[95vh] md:h-screen xsm:h-[70vh] relative z-[15] mx-[2.5%] lg:mt-[7.8%] xsm:mt-[20%] sm:mt-[20%] md:mt-[12.5%]  bg-white dark:bg-zinc-900 dark:text-white shadow-lg shadow-black rounded-3xl overflow-hidden flex items-center justify-center box-sizing lg:cursor-none"
          >
            <div id="content" className="relative inline-block text-center">
            <h1 className="absolute left-1/2 md:text-[14vw] xsm:text-[17vw] xsm:top-[-31%] sm:top-[-33%] md:top-[-40%] lg:top-[-70%] tracking-mostWidest z-[10] font-black transform -translate-x-1/2 ">AIRPOD</h1>

              <img 
              className="relative max-w-[50%] mx-auto my-0 block z-[20]"
              src={heroPosterImg} alt="sorry" />
              <p className="absolute left-1/2 xsm:top-[170%] sm:top-[220%] xsm:text-[0.7em] lg:text-[1em] md:text-[0.9em] text-slate-700 w-full transform -translate-x-1/2">Unleasing the Power of Modern Tech</p>
            </div>
          </div>
          <div className="lg:w-[95%] lg:h-[86vh] md:h-[50%] xsm:w-[95%] xsm:min-h-[60%] relative z-[15] mx-[2.5%] lg:mt-[2%] xsm:mt-[4%] bg-white dark:bg-zinc-900 dark:text-white shadow-lg shadow-black rounded-3xl overflow-hidden flex flex-col gap-2 items-center justify-start box-sizing border-box px-2 py-2">
            <h1 className="font-semibold lg:text-[5rem] xsm:text-[2rem] sm:text-[3rem]">Category</h1>
            <div className="w-full h-[90%] px-2 py-2 grid xsm:grid-cols-1 lg:grid-cols-6 lg:grid-row-2 gap-2 items-center justify-items-center">
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
