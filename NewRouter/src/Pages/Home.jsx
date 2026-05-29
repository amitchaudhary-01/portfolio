import React from 'react'
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
     <div className="text-white ">
      <h1 className="text-3xl font-bold">Welcome Amit!</h1>



      <button className="mt-5 px-6 py-2 bg-black text-white rounded hover:bg-orange-400 transition-colors">
        See Portfolio
      </button>
       <button className="mt-6 px-4 py-2 bg-white text-black rounded hover:bg-blue-900 transition-colors">
        View Achievment
      </button>
      
    </div>
  )
}

export default Home
