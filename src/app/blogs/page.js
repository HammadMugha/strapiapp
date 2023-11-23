import React from 'react'
import { ServiceOneData } from '@/data/data'
import Image from 'next/image';
function blog() {
    const { title, posts } = ServiceOneData;
  return (
    <>
    <h2>All Blogs</h2>
    <div className='container mx-auto py-3'>
    <div className='grid grid-cols-3 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {posts.map(({ image, icon, title, text, button }, index) => (
            <div className="grid-cols-4 mb-4 rounded p-5 shadow-inner cursor-pointer" key={`service-one-key-${index}`}>
              <div className="service_box">
                <div className="service_img">
                    <Image src={image} />
                  <div className="icon-box">
                    <i className={icon}></i>
                  </div>
                </div>
                <div className="service_details">
                     <h2 className='my-2'>{title}</h2>
                   <p>{text}</p>
              
                </div>
              </div>
            </div>
          ))}
    </div>
    </div>
    </>
  )
}

export default blog