
import React from 'react';
import style from "../app/register/login.module.css";
import Link from 'next/link';
import { IoMdArrowDropright } from 'react-icons/io';

const Footer = ()=>{
    return(
        <div>
            <footer class={`${style.footer} flex justify-between px-[5%] text-[15px] text-black pt-[10rem]  `}>
                <div className="flex text-center items-center gap-1">
                    <p class="hover:text-blue-500"><Link href="#">English Language (Nig) </Link></p>
                    <i><IoMdArrowDropright /></i>
                </div>
                <p class="hover:text-blue-500"><Link href="#">Help</Link></p>
                <p class="hover:text-blue-500"><Link href="#">Terms</Link></p>
                <p class="hover:text-blue-500"><Link href="#">Privacy</Link></p>
            </footer>
        </div>
    )
}

export default Footer;