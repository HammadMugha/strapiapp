"use client";
import { useEffect, useState } from "react"

const user = () => {
    // CLIENT SIDE FETCHING
    const [count, setCount] = useState([]);
    const fetchData = async()=> {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        const proucts = data.products
        console.log(proucts);
        return setCount(proucts)
    }
     useEffect(()=>{
       fetchData()
     },[])
    return (
      <div>
        {count.map((post) => {
          <h1>{post.title}</h1>
          
        })}
      </div>
    )
  }
  
  export default user