"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Product({item}) {
    const { title, description, img, subtitle } = item?.attributes;
  return (
    <>
    <Link href={`/product/${item?.id}`} >
        <div className="p-4 min-h-[350px] w-full" key={item?.id}>
        <div className="bg-gray-100 p-6 rounded-lg overflow-hidden">
          <div className="w-full overflow-hidden">
          <Image src={`http://localhost:1337${img?.data?.attributes?.url}`} width="0" height='0' sizes="100vw"
          className='duration-400 hover:scale-105 object-cover' style={{ width: '100%', height: 'auto' }} // optional
          />
          </div>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-3">{subtitle}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
          {/* <p className="leading-relaxed text-base">{description}</p> */}
        </div>
      </div>
        </Link>
    </>
  )
}
