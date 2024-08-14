import React from 'react';

const Cursor = ({ position, isVisible, className }) => {
  return (
    isVisible && (
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
        }}
        className = {`${className} w-[1rem] h-[1rem] tracking-widest flex justify-center items-center rounded-full  bg-[#3ad611] text-black font-bold text-[0.9em] xsm:hidden md:flex`}
      >
      </div>
    )
  );
};

export default Cursor;
