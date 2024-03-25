"use client";
import React from 'react';
import style from "./navbar.module.css"
import Link from '@/node_modules/next/link';
import {TiThMenu} from "react-icons/ti";
import { IoMdClose } from 'react-icons/io';

export default function NavBar(){
    function open(){
        document.getElementById("links").style.right = "0px";
    }
    function close(){
        document.getElementById("links").style.right = "-40rem";
    }
    return(
    <div class={`${style.container} w-full flex md:justify-between py-4 items-center`}>
        <div  class={`${style.logoContainer} text-center flex gap-[12px] items-center `}>
                <p class={`${style.logo} px-6 md:px-2 bg-[#B80C09]  lg:text-[40px] text-white font-600 rounded-[16px] h-[65px]`}>e</p>
                <span class={`${style.logoSpan} text-white text-[16px]`}>Essential Mail</span>
        </div>
        <div class={`${style.menu} hover:scale-110 `} onClick={()=>open()}>
            <TiThMenu size="28px"/>
        </div>
        <div id="links" className={`${style.linksContainer} items-center lg:w-full py-6 flex lg:justify-between`}>
                <div class={`${style.close} lg:hidden md:absolute`} onClick={()=>close()}>
                    <IoMdClose size="28px" color='black'/>
                </div>
                <ul className={`${style.links} w-[425px] font-semibold text-white relative text-[16] lg:flex gap-[9rem] text-center`}>
                    <li className='cursor-pointer'><Link href="#">About us</Link></li>
                    <li className='cursor-pointer'><Link href="#">Support</Link></li>
                    <li className='cursor-pointer'><Link href="#">Other Services</Link></li>
                </ul>
                <div class={`${style.btn}  text-[20px] text-[#4772E2] flex lg:gap-3 md:gap-2  text-center items-center`}>
                <p className=' px-6 py-3 font-bold cursor-pointer'><Link href="/register">Signup</Link></p>
                <p className=' px-6 py-3 cursor-pointer'><Link href="/login">Login</Link></p>
        </div>
        
        </div>
        
    </div>
    )
  };