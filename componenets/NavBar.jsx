import React from 'react';
import style from "./navbar.module.css"
import Link from '@/node_modules/next/link';

export default function NavBar(){
    return(
    <div class={`${style.container} w-full`}>
        <div className={`${style.linksContainer} items-center  py-6`}>
            <div  class={` text-center flex gap-[12px] items-center`}>
                <p class={`${style.logo} px-6 md:px-2 bg-[#B80C09]  lg:text-[40px] text-white font-600 rounded-[16px] h-[65px]`}>e</p>
                <span class={`${style.logoSpan} text-white text-[16px]`}>Essential Mail</span>
            </div>
                <ul className={`${style.links} w-[425px] font-semibold text-white relative text-[16]`}>
                    <li><Link href="#">About us</Link></li>
                    <li><Link href="#">Support</Link></li>
                    <li><Link href="#">Other Services</Link></li>
                </ul>
        </div>
        <div class={`${style.btn}  text-[20px] text-[#4772E2] flex gap-3  text-center items-center`}>
            <p className=' px-6 py-3 font-bold'><Link href="/register">Signup</Link></p>
            <p className=' px-6 py-3'><Link href="/login">Login</Link></p>
        </div>
    </div>
    )
  };