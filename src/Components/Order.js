import React from 'react'
import {Link,Outlet} from 'react-router-dom';
export const Order = () => {
  return (
    <div>
      <h1>Order</h1>
      <div>
      <Link to='Products'>View Product</Link>
      <Link to='Address'>Shipping Address</Link>
      <Outlet/>
      </div>
    
    </div>
  )
}



