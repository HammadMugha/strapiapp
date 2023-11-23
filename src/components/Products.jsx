"use client";
import React, { useEffect } from 'react'
import Product from './Product';


async function getProducts(){
    let header = {Authorization: "Bearer fb45d2a54be5119725b528e96af34c69210061dc717974e4010b24df5ae31083cd2c8f0e34912bd9fcfe53c47c7634ee1f57ff8c0be95912857f5e97b1475976dcbe3bf23081c83e8ee64acb7e6cdd76431635c299363e98778a282c029b8471bf4f436a09d735bb88894e2f509b8e7614f5d6cff9cb588196ea479ab858018b"}
    try {
      let url = await fetch("http://localhost:1337/api/products?populate=*",{headers:header})
    const products = await url.json()
    return products
    } catch (error) {
      console.log(error);
    }
    console.log(products);
}



export default async function Products() {
  useEffect(()=>{
    getProducts()
  },[])

    const data = await getProducts()
    // const imageUrl =
    // "http://localhost:1337" + data.data.attributes.img.data.attributes.url;
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Products</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div className="grid md:grid-cols-3 sm:grid-cols-3 gap-[40px]">
      {data?.data?.map((item)=>{
        return <Product item={item} key={item.id}/>
      })}
    </div>
  </div>
</section>
    </>
  )
}



// export async function getServerSideProps(){
//     let header = {Authorization: "Bearer 0a682261d6a7870735f72211b6c03b12bd7e7c33723abc66dc4cf07b64cb87bee1fa973c478df7a1b1feb3f056451afc33f8450c347e9ff5a7b133b0745aaab29cc8ef64be8949b692f8e7f366b96973a12acc2111103c6a8a501192e48d434a1191c037477fb32d1b5537b8007ec14b05f5ed150e80ffa08e9033f31a66409a"}
//     let url = await fetch("http://localhost:1337/api/product",{headers:header})
//     const products = await url.json()
//     console.log(products);
//     return {
//         props:{products:products}
//     }
// }