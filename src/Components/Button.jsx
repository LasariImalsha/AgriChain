import React, { useState } from 'react';

function Button({ btnName, btnImg, hoverImg }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full text-white hover:text-agro_green'>
      <button 
        className='w-full flex flex-row gap-4 items-center p-2 px-3 rounded-md hover:bg-light_green '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={isHovered ? hoverImg : btnImg} className='w-5 h-5' alt="icon" />
        <h1 className='text-md  font-semibold hover:font-bold '>{btnName}</h1>
      </button>
    </div>
  );
}

export default Button;
