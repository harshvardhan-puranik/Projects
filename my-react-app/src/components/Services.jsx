import React, { useState } from 'react'
import "./Services.css"

const Services = () => {
  const [count, setcount] = useState(0)

  const addset = () => {
    setcount(count+1)
  }
  const minset = () => {
    if(count>0)
    setcount(count-1)
  }
  return (
    <div className="counter">
      <h2>Counter: </h2>
      <div className="butcon">
        <button onClick={addset} className="but">+</button>
        <button onClick={minset} className="but">-</button>
      </div>
      <h2>Total Count: {count}</h2>
    </div>
  )
}

export default Services