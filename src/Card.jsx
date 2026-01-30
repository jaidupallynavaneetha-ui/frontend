import React from 'react'

function Card(props) {

  return (
   <>
      <div style={{border:'1px solid black'}} >
      <h1>userdetails</h1>
      <p>name:{props.name}</p>
      <p>age:{props.age}</p>
      <p>branch:{props.branch}</p>

    </div>
   </>
  )
}

export default Card