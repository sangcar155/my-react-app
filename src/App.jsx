import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import Welcome from './components/Welcome'
import LikeCounter from './components/LikeCounter'
import ProductList from './components/ProductList'
import UseRef from './components/UseRef'
import PreviousCounter from './components/PreviousCounter'
import Timer from './components/timer';



function App() {

 return (
<div>
      {/* Navigation Links */}
<nav className="navbar navbar-expand-lg bg-light shadow rounded p-3 mb-4">
  <div className="container-fluid">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
      <li className="nav-item">
        <Link to="/" className="nav-link text-primary fw-medium">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/welcome" className="nav-link text-primary fw-medium">Welcome</Link>
      </li>
      <li className="nav-item">
        <Link to="/counter" className="nav-link text-primary fw-medium">Like Counter</Link>
      </li>
      <li className="nav-item">
        <Link to="/useRef" className="nav-link text-primary fw-medium">UsrRef</Link>
      </li>
      <li className="nav-item">
        <Link to="/product" className="nav-link text-primary fw-medium">Product</Link>
      </li>
      <li className='nav-item'>
      <Link to="/previousCounter" className="nav-link text-primary fw-medium">History</Link>
      </li>
       <li className='nav-item'>
      <Link to="/timer" className="nav-link text-primary fw-medium">Timer</Link>
      </li>
    </ul>
  </div>
</nav>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome name="Sangita" />} />
        <Route path="/counter" element={<LikeCounter />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/useRef"  element={<UseRef/>} />
        <Route path="/historyCounter" element={<PreviousCounter/>}/>
        <Route path="/timer" element={<Timer/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </div>
 )
  
}

export default App
