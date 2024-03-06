
import React from 'react';
import style from "../app/register/login.module.css";
import Link from 'next/link';
import { IoMdArrowDropright } from 'react-icons/io';

const Footer = ()=>{
    return(
        <div>
            <footer class={`${style.footer} flex lg:gap-[233px] justify-center mx-auto mt-[8rem]`}>
                <div className="flex text-center items-center gap-1">
                    <span class="hover:text-blue-500 "><Link href="#">English Language (Nig) </Link></span>
                    <i><IoMdArrowDropright /></i>
                </div>
                <span class="hover:text-blue-500"><Link href="#">Help</Link></span>
                <span class="hover:text-blue-500"><Link href="#">Terms</Link></span>
                <span class="hover:text-blue-500"><Link href="#">Privacy</Link></span>
            </footer>
        </div>
    )
}

export default Footer;