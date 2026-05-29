import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Footer from './Pages/Footer'
import Blogs from './Pages/Blogs';
import Company from './Pages/Company';
import Career from './Pages/Career';
import Portfolio from './Pages/Portfolio';
import Ourteam from './Pages/Ourteam';
import AboutUs from './Pages/AboutUs';
import Products from './Pages/Products';

 
const App = () => {
  return (


    <div  className="min-h-screen bg-[url('/background.webp')] bg-cover bg-center  bg-no-repeat">
   

    
    <BrowserRouter >
    <Routes>

      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='career' element={<Career/>}/>
      <Route path='company' element={<Company/>}/>
      <Route path='blog' element={<Blogs/>}/>
      <Route path='footer' element={<Footer/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='ourteam' element={<Ourteam/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='products' element={<Products/>}/>

      </Route>

    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
