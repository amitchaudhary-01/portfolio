import React from 'react'
import TopNavbar from '../Components/TopNavbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Layout = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat"
    >

       {/* Navbar  */}
      <TopNavbar />

      {/* Content Area */}
      <main className="flex-1 bg-black/50 pt-24 px-4">
        <Outlet />
      </main>

      {/* Footer */}

<Footer/>
    </div>
  )
}

export default Layout
