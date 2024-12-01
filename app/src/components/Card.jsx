import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

function Card({ img, title, newPrice, prevPrice, star, reviews }) {
  return (
    <div>
      <div className='p-2 transition-all delay-75 border rounded-md hover:shadow-md w-38 card hover:scale-110'>
        <img src={img} alt="" className='object-contain w-36 h-36' />
        <div className=' details'>
          <h3 className='h-10 overflow-hidden leading-4 w-36 text-wrap'> {title}</h3>
          <div className='flex items-center review'>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <span>4</span>
          </div>
          <div className='flex items-center justify-between'>
          <div>
            <del>{prevPrice}</del> {newPrice}
          </div>
            <div>
              <FaCartPlus />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card
