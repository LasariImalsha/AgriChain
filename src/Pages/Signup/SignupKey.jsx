import React, { useState } from 'react'
import { FaCopy } from "react-icons/fa";
import { hideSignupKey } from '../ReduxManagement/signupSlice'
import { useDispatch } from 'react-redux'
import CopyToClipboard from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';


function SignupKey() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [textToCopy, setTextToCopy] = useState('');
  const [copyStatus, setCopyStatus] = useState(false);

  const handleKey = ()=>{
    navigate("/");
    dispatch(()=>dispatch(hideSignupKey()))
  }

  const onCopyText = ()   =>{
    setCopyStatus(true);
  }

  return (
<div className='mt-24 mob:border-2 border-light_green rounded-lg flex p-3 py-8 sm:mx-12 mob:mx-8 md:mx-0'>
  <div className='flex flex-col gap-8 px-6 '>
    <h1 className='mob:text-[13px] mob2:text-[15px] text-black/50 text-center'> Please Copy this username. 
    Once it's closed you aren't able to see the username again</h1>
    
    <div className='relative flex flex-row items-center justify-center'>
     <input
        value={textToCopy}
        onChange={(e)=> setTextToCopy(e.target.value)}
        className=' rounded-lg w-full border h-12 focus:outline-none text-[12px] mob2:text-[15px] px-4'
     />
      <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
        <FaCopy 
            className=" text-gray-400 absolute right-4 flex items-center justify-center" 
        />
      </CopyToClipboard>
    </div>

    <h3 className='sm:text-[13px] mob2:text-[15px] tracking-wider text-center font-semibold'>Great! Now you can login to <span className='text-agro_green text-[15px] font-bold tracking-normal'>Harvest Hub</span></h3>
    <button
        className='w-full py-2 bg-agro_green text-white items-center justify-center '
        onClick={handleKey}
    >
        Login
    </button>
  </div>
  </div>
  )
}

export default SignupKey