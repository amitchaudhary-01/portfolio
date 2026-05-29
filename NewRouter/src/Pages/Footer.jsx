import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
  return (

    <footer className="bg-black/70 text-white border-t border-white/20">

      

      <div className="text-center py-6 text-sm text-gray-300">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>

    </footer>
    
    // <footer className="bg-black/60 backdrop-blur-md text-white mt-10 border-t border-white/20">

    //   <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

    //     {/* About Section */}
    //     <div>
    //       <h2 className="text-xl font-bold mb-3">MyWebsite</h2>
    //       <p className="text-gray-300 text-sm">
    //         We build modern web applications using React and Tailwind CSS.
    //         Clean, fast, and responsive designs for everyone.
    //       </p>
    //     </div>

    //     {/* Quick Links */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
    //       <ul className="space-y-2 text-gray-300">
    //         <li><NavLink to="/" className="hover:text-yellow-300">Home</NavLink></li>
    //         <li><NavLink to="/career" className="hover:text-yellow-300">Career</NavLink></li>
    //         <li><NavLink to="/company" className="hover:text-yellow-300">Company</NavLink></li>
    //         <li><NavLink to="/blog" className="hover:text-yellow-300">Blog</NavLink></li>
    //         <li><NavLink to="/portfolio" className="hover:text-yellow-300">Portfolio</NavLink></li>
    //       </ul>
    //     </div>

    //     {/* Contact Section */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-3">Contact</h3>
    //       <p className="text-gray-300 text-sm">Email: info@mywebsite.com</p>
    //       <p className="text-gray-300 text-sm">Phone: +977-98XXXXXXXX</p>
    //       <p className="text-gray-300 text-sm">Location: Butwal, Nepal</p>
    //     </div>

    //   </div>

    //   {/* Bottom Bar */}
    //   <div className="text-center py-4 border-t border-white/20 text-gray-400 text-sm">
    //     © {new Date().getFullYear()} MyWebsite. All rights reserved.
    //   </div>

    // </footer>
   
  )
}

export default Footer
