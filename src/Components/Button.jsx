import React, { useState } from 'react';

function Button({ btnName, btnImg, hoverImg }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full text-agro_green hover:text-agro_green'>
      <button 
        className='w-full flex flex-row gap-4 items-center p-2 px-3 rounded-md hover:bg-agro_green/40 '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={isHovered ? btnImg : btnImg} className='w-5 h-5' alt="icon" />
        <h1 className='text-sm font-bold '>{btnName}</h1>
      </button>
    </div>
  );
}

export default Button;
