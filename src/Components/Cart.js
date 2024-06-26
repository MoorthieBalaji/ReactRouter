import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
    const navigate=useNavigate();
  return (

    <div>
      <h1>cart</h1>
      <button onClick={()=>navigate('/RemoveProduct')}>remove Products</button>
      <button onClick={()=>navigate('/')}>go to Home</button>
    </div>
  )
}



