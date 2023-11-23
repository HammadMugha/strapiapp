"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/logo.png.webp'
import { BiCartAlt ,BiHeart , BiSearch } from 'react-icons/bi'
import { useSelector } from 'react-redux'

function Header() {
  const {cartItems} = useSelector(state=> state.cart)
  return (
    <div className='header'>
        <div className="container py-1 mx-auto">
            <div className="flex justify-between items-center py-4">
                <div className="log text-lg font-medium"><Image src={logo} width="110" height='40'/></div>
                <ul className="flex gap-4 items-center">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/products"}>Products</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                    <button className="bg-[#FF2020] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[25px]"><Link href={"/signup"}>Sign up</Link></button>
                </ul>
                <div className="right flex gap-4 items-center">
                  <div className="badge">
                    <BiSearch size={24}/>
                  </div>
                  <div className="badge relative">
                    <BiCartAlt size={24}/>
                    {cartItems >= 0 && <span className='absolute right-[-8px] top-[-13px] bg-[#FF2020] text-white rounded-full h-[20px] w-[20px] flex items-center justify-center'>{cartItems.length}</span>}
                  </div>
                  <div className="badge">
                  <BiHeart size={24}/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header