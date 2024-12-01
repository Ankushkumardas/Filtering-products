import React from 'react'
import Input from './Input'

function Category({ handleradiochange }) {
  return (
    <div>
      <h2>Category</h2>
      <div className='ml-2 parent-cont'>
        <div>
          <input type="radio" value={""} onChange={handleradiochange} />
          <span> All</span>
        </div>
        <Input handleradiochange={handleradiochange} value={"sneakers"} title={"Sneakers"} />
        <Input handleradiochange={handleradiochange} value={"flats"} title={"Flats"} />
        <Input handleradiochange={handleradiochange} value={"sandals"} title={"Sandals"} />
        <Input handleradiochange={handleradiochange} value={"heels"} title={"Heels"} />
      </div>
    </div>
  )
}

export default Category
