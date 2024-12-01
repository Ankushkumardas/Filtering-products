import React from 'react'
import Input from './Input'

function Price({handleradiochange}) {
  return (
    <div>
      <h2>Price</h2>
      <div className='ml-2 parent-cont'>
        <div>
          <input type="radio" value={""} onChange={handleradiochange} />
          <span> All</span>
        </div>
        <Input handleradiochange={handleradiochange} value={50} title={"$0 - $50"} />
        <Input handleradiochange={handleradiochange} value={100} title={"$50 - $100"} />
        <Input handleradiochange={handleradiochange} value={150} title={"$100 - $150"} />
        <Input handleradiochange={handleradiochange} value={200} title={"$150 - $200"} />
        
      </div>
    </div>
  )
}

export default Price
