"use client";
import { ServiceSection } from '@/data/data'
import Image from 'next/image';
import React from 'react'

function Service() {
    const { title, posts } = ServiceSection;
  return (
    <>
    <div className="container mx-auto py-[50px]">
     <div className="grid py-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-1">
        {
            posts.map((item,index)=>{
                return <div className="col text-center" key={item.id}>
                <Image src={item?.img} width="50" height='40' className='mx-auto mb-3'/>
                <h3 className='text-[20px] font-semibold mb-2'>{item?.title}</h3>
                <p>{item?.text}</p>
            </div>
            })
        }
     </div>
    </div>
    </>
  )
}

export default Service