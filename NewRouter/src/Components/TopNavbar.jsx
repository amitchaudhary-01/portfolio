import React, { useEffect, useState } from 'react'
import { Link } from "react-router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LoaderPinwheel, LogIn} from "lucide-react"


import axios from 'axios';


const TopNavbar = () => {
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

     <nav 
     
   className="fixed top-0 left-0  z-10 backdrop-blur-md border-b border-white/20 w-full gap-40">

        <Navbar expand="lg" className="bg-orange-400 " >
      <Container>
        {/* <Navbar.Brand href="/home" >Amit</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <img className="rounded-md w-22 h-10 " src="logo.webp"/>

            <Nav.Link href="/" className="t0-blue-500">Home</Nav.Link>
          
          <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/products">Products</NavDropdown.Item>
              </NavDropdown>


            
               <Nav.Link href="/portfolio" className="to-blue-500">Portfolio</Nav.Link>
              <Nav.Link href="/ourteam" className="to-blue-500">Our team</Nav.Link>
              <Nav.Link href="/career" className="to-blue-500">Career</Nav.Link>
              <Nav.Link href="/blog" className="to-blue-500">Blogs</Nav.Link>
              
             
           
          </Nav>

          <Nav.Link href="/login" className="to-blue-500 justify-end">Login <LogIn className="text-black " /></Nav.Link>
        </Navbar.Collapse>
        
        
      </Container>
    </Navbar>

</nav>
   
  )
}

export default TopNavbar



// import { NavLink } from 'react-router'

// const TopNavbar = () => {
//   
//   return (
//     <nav className="fixed top-0 left-0 w-full z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
      
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

//         {/* Logo */}
//         
//         <h1 className="text-white font-bold text-xl justify-start">
//           MyWebsite
//         </h1>

//         {/* Links */}
//         <div className="flex gap-6 text-white font-medium">

//           <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>
//           <NavLink to="/career" className="hover:text-yellow-300">Career</NavLink>
//           <NavLink to="/company" className="hover:text-yellow-300">Company</NavLink>
//           <NavLink to="/blog" className="hover:text-yellow-300">Blog</NavLink>
//           <NavLink to="/portfolio" className="hover:text-yellow-300">Portfolio</NavLink>
//           <NavLink to="/ourteam" className="hover:text-yellow-300">Team</NavLink>
//           <NavLink to="/login" className="hover:text-yellow-300">Login</NavLink>

//         </div>

//       </div>
//     </nav>
//   )
// }

// export default TopNavbar
