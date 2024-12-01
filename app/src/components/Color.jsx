import React from 'react'
import Input from './Input'

function Color({handleradiochange}) {
  return (
    <div>
      <h2>Colors</h2>
      <div className='ml-2 parent-cont'>
        <div>
          <input type="radio" value={""} onChange={handleradiochange} />
          <span> All</span>
        </div>
        <Input handleradiochange={handleradiochange} value="black" title={"Black"} color="black"/>
        <Input handleradiochange={handleradiochange} value={"red"} title={"Red"} color={"red"}/>
        <Input handleradiochange={handleradiochange} value={"green"} title={"Green"} />
        <Input handleradiochange={handleradiochange} value={"blue"} title={"Blue"} />
        <Input handleradiochange={handleradiochange} value={"white"} title={"White"} />
      </div>
    </div>
  )
}

export default Color
