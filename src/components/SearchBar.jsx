import React, { useState } from 'react'

const SearchBar = ({ query, handleSearch, removeHandleSearch }) => {
    



  return (
    <form
          action=""
          className="w-full h-full flex justify-center items-center"
        >
          <input
            type="text"
            placeholder="Search item"
            className="lg:w-[80%] lg:h-[60%] xsm:h-[70%] xsm:w-full shadow-black shadow-inner rounded-full lg:px-2 xsm:px-1 outline-none lg:text-[0.9em] xsm:text-[0.8em]"
            value={query}
            onChange={handleSearch}
            onMouseDown={removeHandleSearch}
          />
          <button className="transform-translate-[-10%,0] lg:h-[60%] xsm:px-0 xsm:left-[-15%] lg:px-4 relative lg:left-[-10%] pointer">
            <i className="ri-search-line"></i>
          </button>

      
        </form>
  )
}

export default SearchBar