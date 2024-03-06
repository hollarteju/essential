import Image from "next/image";
import style from "./home.module.css";
import NavBar from "../componenets/NavBar";
import Service from "./service"
import Link from 'next/link';
import { IoMdArrowDropright } from 'react-icons/io';


export default function Home() {  
  return (
    <div class="w-full relative overflow-hidden  ">
      <NavBar/>
      <div className={`${style.headlineContainer} w-[100%] h-100vh  relative grid grid-cols-4 bg-[#F0F0F0] gap[20px] g:pb-[11rem]`}>
        
        <div className={`${style.headline} relative  text-white h-full col-span-3 px-[10%] lg:pt-[15rem] l`}>
          <p className={` lg:w-[517px] lg:text-[32px] font-semibold`}>
                Lorem ipsum dolor sit amet consectetur. Elit ut 
                turpis rhoncus mauris adipiscing curabitur.
          </p>
          <button class={`lg:w-[302px] py-[25px] md:py-[20px] text-[24px] font-600 bg-[#B80C09] rounded-[10px] self-left hover:opacity-[0.7]`}>
            Get Started
          </button>
          <span className={` text-[16px] w-[250px] font-600`}>
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className={` text-[16px] w-[250px] font-600`}>
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className={` text-[16px] w-[250px] font-600`}>
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        
        <div class="absolute w-full h-full">
          <div className={`${style.laptop} absolute top-[20%] h-[812px] w-[50%] right-[0%]`}></div>
          <div class={`${style.profile} absolute  top-[20%] h-full  w-[17%] lg:right-[18%] `}></div>
          <div class={` ${style.group} none absolute top-[40%] h-full w-[10%] lg:right-[40%]`}></div>
        </div>
        <div className="absolute py-6 lg:left-[0%] md:left-[0%] bottom-[0]">
            <footer class={`${style.footer} text-[16px] font-[700] flex lg:gap-[183px] md:gap-[123px]  w-screen justify-center mx-auto mt-[8rem]`}>
                <div className="flex text-center items-center gap-1">
                    <span class="text-white "><Link href="#">English Language (Nig) </Link></span>
                    <i class="text-white "><IoMdArrowDropright /></i>
                </div>
                <span ><Link href="#">Help</Link></span>
                <span ><Link href="#">Terms</Link></span>
                <span ><Link href="#">Privacyd</Link></span>
            </footer>
      </div>
      </div>
      
        <Service/>
    </div>
      );
}
