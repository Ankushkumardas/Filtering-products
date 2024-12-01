import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import Card from './Card';

function Products({result}) {
  return (
    <div className='relative z-1'>
    <h2 className='mb-4 ml-4'>Products :</h2>
      <section className='flex flex-wrap gap-4 ml-4 card-container'>
       {result}
      </section>
    </div>
  )
}

export default Products





