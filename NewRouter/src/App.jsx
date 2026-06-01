import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Routes } from "react-router";
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Achievement from './Pages/Achievement';
import axios from 'axios';
import { LoaderPinwheel } from 'lucide-react';
import ProductsView from './Pages/ProductsView';

 
const App = () => {
  const [loading,setLoading]=useState(false)
  const fetchData = async()=>{
       setLoading(true)
        const user =  await axios.get("http://localhost:5173/")
       
        // setData(user.data)
         setLoading(false)
    }

     useEffect(()=>{
        fetchData()
        
    },[fetch])


  if(loading){
  return(
    
  <div className='flex justify-center items-center h-screen w-full'>
   <LoaderPinwheel className='text-9xl text-blue-500 animate-spin h-40 w-30'/>
  </div>
  )
}
  
  return (


    <div className="min-h-screen bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat pt-20">
  <BrowserRouter>
    

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='career' element={<Career />} />
        <Route path='company' element={<Company />} />
        <Route path='blog' element={<Blogs />} />
        <Route path='footer' element={<Footer />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='ourteam' element={<Ourteam />} />
        <Route path='login' element={<Login />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<ProductsView/>}/>
        <Route path='achievement' element={<Achievement />} />
      </Route>
    </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
