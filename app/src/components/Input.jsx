import React from 'react'

function Input({handleradiochange,title,name,color,value}) {
  return (
    <div>
       <div className='flex gap-2'>
          <input type="radio" onChange={handleradiochange} value={value} name={name}/>
          <span>{title}</span>
        </div>
    </div>
  )
}

export default Input
