import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Data from 'react'


const Products = () => {
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

  return (
    <div>
  <h1 className='text-blue-400'>
  Products
</h1>
{
  data.map((value,index)=>{
    return(
       <Data index={index}  key={value.id} title={value.title} description={value.description} category={value.category}
       price={value.price} rating={value.rating} stock={value.stock} src={value.thumbnail}/>
    )
  })
}
</div>
  )
}

export default Products
