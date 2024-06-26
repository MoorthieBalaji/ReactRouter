import './App.css';
import { Home } from './Components/Home';
import { Order } from './Components/Order';
import { Cart } from './Components/Cart';
import { Profile } from './Components/Profile';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import {Products} from './Components/Products';
import {Address} from './Components/Address';
import {RemoveProduct} from './Components/RemoveProduct';
function App() {
  return (
    <>
     
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Order' element={<Order />}>
             <Route path='Address' element={<Address/>}/>
             <Route path='Products' element={<Products/>}/>  
          </Route>
          <Route path='Profile' element={<Profile />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='RemoveProduct' element={<RemoveProduct/>}/>
        </Routes>
    
    </>
  );
}

export default App;
