"use client"
// import { useRouter } from 'next/router'
import { addToCart } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import DetailsPage from "@/components/DetailsPage";
  async function getProduct(id){
    // const router = useRouter()
    // const {id} = router
    let header = {Authorization: "Bearer fb45d2a54be5119725b528e96af34c69210061dc717974e4010b24df5ae31083cd2c8f0e34912bd9fcfe53c47c7634ee1f57ff8c0be95912857f5e97b1475976dcbe3bf23081c83e8ee64acb7e6cdd76431635c299363e98778a282c029b8471bf4f436a09d735bb88894e2f509b8e7614f5d6cff9cb588196ea479ab858018b"}
    try {
      let url = await fetch(`http://localhost:1337/api/products/${id}?populate=*`,{headers:header})
    const products = await url.json()
    return products
    } catch (error) {
      console.log(error);
    }
    // console.log(products);
}



export default async function page({params}) {

  // const dispatch = useDispatch();
    const blog = await getProduct(params.id)

  return (
    <>
    <DetailsPage blog={blog}/>
    </>
  )
}

