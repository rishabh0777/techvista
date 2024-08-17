import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout as logoutUser } from "../../authSlice";
import { clearCart } from "../../cartSlice";
import SearchBar from "./SearchBar";
import products from '../data/products.json'
import { setSelectedSearch } from "../../searchedItemSlice";






const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { user, loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartItemVal = cartItems.length
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);


  // Function to handle Theme
  const handleTheme = ()=>{
    const themeBtn = document.getElementById('themeMode')
    const rootElement = document.documentElement;

    if(rootElement.classList.contains('dark')){
      rootElement.classList.remove('dark')
      themeBtn.classList.add('ri-moon-fill')
      themeBtn.classList.remove('ri-sun-fill')
      localStorage.setItem('theme', 'light');

    }else{
      rootElement.classList.add('dark')
      themeBtn.classList.remove('ri-moon-fill')
      themeBtn.classList.add('ri-sun-fill')
      localStorage.setItem('theme', 'dark');
    }
  }

  useEffect(()=>{
    const themeBtn = document.getElementById('themeMode')
    const rootElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme')

    if(savedTheme==="dark"){
    rootElement.classList.add('dark')
      themeBtn.classList.remove('ri-moon-fill')
      themeBtn.classList.add('ri-sun-fill')
    }else{
      rootElement.classList.remove('dark')
      themeBtn.classList.add('ri-moon-fill')
      themeBtn.classList.remove('ri-sun-fill')
    }

  },[])
  

  // Function to handle the search query input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setQuery(query); // Update the query state

    // Filter items based on the query
    const filtered = products.categories.flatMap((category) =>
      category.items.filter((item) => item.name.toLowerCase().includes(query))
    );

    setFilteredItems(filtered); // Update the filtered items state

  };
 

  // Function to handle item selection
  const handleSelectItem = (item) => {
    console.log(item); // Log the selected item (you can replace this with navigation or another action)
    dispatch(setSelectedSearch(item))
    navigate('searchItems', {replace: true})
    setQuery('');
  };
  
  

  const logOut = (e) => {
    e.preventDefault();
    if(user){
      dispatch(logoutUser(user));
      dispatch(clearCart(cartItems))
      navigate('login')

    }
    return
  };


  const lastScrollTop = useRef(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop.current) {
          navbarRef.current.style.transform = "translateY(-200%)";
        } else {
          navbarRef.current.style.transform = "translateY(0vh)";
        }

        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
    ref={navbarRef}
      id="navbar"
      className="mx-[2vw] lg:min-h-[12vh] px-1 lg:w-[96vw] md-min-h-[10vh] xsm:min-h-[7vh] md:min-h-[8vh] xsm:w-[96vw] top-[1vh] z-[200] shadow-lg shadow-black text-black bg-[#ffffff] dark:bg-zinc-800 dark:text-white rounded-full flex items-center  lg:py-0 lg:px-5 xsm:px-[0.1em] xsm:py-1 fixed font-thin"
    >
      <div id="nav-part1" className="lg:w-[15%] xsm:w-[17%] h-full flex items-center xsm:text-center ">
        <h1 className="lg:text-[2em] md:text-[1em] xsm:text-[0.6em] xsm:font-semibold xsm:ml-1 ">techVista</h1>
      </div>
      <div id="nav-part2" className="lg:w-[35%] h-full xsm:w-[40%] flex items-center xsm:justify-center xsm:ml-1 lg:px-0">
       <SearchBar query={query} handleSearch={handleSearch}  />
      </div>
<div id="navPart3" className="lg:w-[43%] h-full items-center justify-self-center">
        <ul className="w-full h-full flex items-center justify-between lg:text-[0.9em] xsm:text-[0.8em] ">
            
        <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "lg:bg-[#3ad621] lg:text-white xsm:text-[#3ad611] duration-300 font-semibold ease-linear flex justify-center gap-1 py-2 rounded-3xl w-[8vw]" : "font-semibold flex justify-center gap-1 py-2 rounded-3xl w-[8vw] ")}
            >
            <i className="ri-home-4-fill"></i>
              <p className="lg:flex xsm:hidden">Home</p>
            </NavLink>         
            <NavLink
              to="product"
              className={({ isActive }) => (isActive ? "lg:bg-[#3ad621] lg:text-white xsm:text-[#3ad611] duration-300 font-semibold ease-linear flex justify-center gap-1 py-2 rounded-3xl w-[8vw]" : "font-semibold flex justify-center gap-1 py-2 rounded-3xl w-[8vw]")}
            >
            <i className="ri-shopping-bag-2-fill"></i>
              <p className="lg:flex xsm:hidden">Product</p>
            </NavLink>
            <NavLink
              to="cart"
              className={({ isActive }) => (isActive ? "lg:bg-[#3ad621] lg:text-white xsm:text-[#3ad611] duration-300 font-semibold ease-linear flex justify-center gap-1 py-2 rounded-3xl w-[8vw]" : "font-semibold flex justify-center gap-1 py-2 rounded-3xl w-[8vw]")}
            >
            {
              cartItemVal===0?(
                <p></p>
              ):(

              <p className="text-red-700 text-[0.8em] font-semibold">{cartItems.length}</p>
              )
            }
            <i className="ri-shopping-cart-fill"></i>
              <p className="lg:flex xsm:hidden">cart</p>
            </NavLink>
          {user ? (
              <button
                onClick={logOut}
                className="text-black dark:text-white font-semibold  flex justify-center gap-1 py-2 rounded-3xl w-[8vw]"
              >
              <i className="ri-logout-box-line"></i>
                <p className="lg:flex xsm:hidden">Logout</p>
              </button>
          ) : (
              <NavLink
                to="/login"
                className="text-black dark:text-white  font-semibold flex justify-center gap-1 py-2 rounded-3xl w-[8vw]"
              >
              <i className="ri-login-box-line"></i>
                <p className="lg:flex xsm:hidden">Login</p>
              </NavLink>
          )}
          <i id='themeMode' onClick={handleTheme} className="ri-moon-fill text-md cursor-pointer duration-300 ease-linear"></i>
        </ul>
      </div>
      
            {
              filteredItems.length > 0 && query.length > 0 &&(
                <ul className="md:w-[18rem] md:min-h-[6rem] md:max-h-[12rem] xsm:w-[14rem] xsm:min-h-[4rem] xsm:max-h-[8rem] bg-[#fff] dark:bg-black dark-text-white  py-2 fixed left-[19%] top-[100%] text-center overflow-hidden">
          {filteredItems.map((item) => (
            <li className="py-2 hover:bg-[#3ad621]  dark:hover:text-white lg:text-[0.88em] text-center" key={item.id} onClick={() => handleSelectItem(item)}>
              {item.name} - {item.brand}
            </li>
          ))}
        </ul>
              )
            }
    </nav>
  );
};

export default Header;
