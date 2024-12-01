import React from 'react'
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";

function Nav({ query, handleinputchange }) {
  return (
    // <div className='fixed flex items-center justify-between w-full p-4 pl-20 pr-20 border shadow-sm z-999'>
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-between p-4 px-32 bg-white shadow-md'>
      <div className=''>
        <input type="text" placeholder='Enter the Item to be Searched' className='px-2 py-1 ml-20 border-2 rounded-md w-60' onChange={handleinputchange} value={query} />
      </div>
      <div className='flex items-end gap-2 profile'>
        <a href=""><CiHeart size={24} />
        </a>
        <a href=""><CgProfile size={24} />
        </a>
        <a href=""><IoCartOutline size={24} />
        </a>
      </div>
    </div>
  )
}

export default Nav
