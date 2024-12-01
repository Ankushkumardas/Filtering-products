import React from 'react'
import Category from './components/Category'
import Price from './components/Price'
import Color from './components/Color'
import { BsCart4 } from "react-icons/bs";

function Sidebar({handleradiochange}) {
  console.log(handleradiochange)
  return (
    <div className='fixed w-1/5 h-screen p-2 mt-1 '>
      <div className='flex items-center gap-2 p-2'>
        <h2 className='text-lg '>Sidebar </h2>
        <BsCart4 />
      </div>
      <div className='ml-5 space-y-4 '>
        <Category handleradiochange={handleradiochange}/>
        <Price handleradiochange={handleradiochange}/>
        <Color handleradiochange={handleradiochange}/>
      </div>
    </div>
  )
}

export default Sidebar


