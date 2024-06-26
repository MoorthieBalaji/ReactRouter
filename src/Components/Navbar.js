import React from 'react'
import {Link } from 'react-router-dom';
 export const Navbar = () => {
  return (
    <div>
      <nav>
         <Link to='/'>Home</Link>
         <Link to='/Order'>Order</Link>
         <Link to='/Cart'>My Cart</Link>
         <Link to='/Profile'>Profile</Link>
      </nav>
    </div>
  )
}



