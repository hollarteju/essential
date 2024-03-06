"use client";
import React from 'react';
import style from "../register/login.module.css"
import Link from 'next/link';
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import Footer from "../../componenets/footer"




const Login = ()=>{
    return(
        <div class="font-[sans-serif] text-gray-800 bg-white max-w-screen block items-center mx-auto md:h-screen p-4 font-lato">
            <div  class={`${style.logoContainer} flex gap-[12px] items-center py-2 lg:mx-[132px] mb-[200px]`}>
                <p class={`${style.logo} px-6 bg-[#B80C09]  lg:text-[40px] text-white font-600 rounded-[16px] h-[65px]`}>e</p>
                <span class={`${style.logoSpan} text-[#4772E2] text-[16px]`}>Essential Mail</span>
            </div>
            
            <div  className={`${style.loginContainer} items-center overflow-hidden md:h-551 max-w-[562px] mx-auto`}>
                <div className="relative items-center h-full w-full overflow-hidden contents-center">
                
                    <form className={` h-full relative rounded-md py-6 px-4  sm:px-4 text-center transition-all `}>
                        <div className={`${style.loginHeader}  text-[24px]`}>
                            <i class="text-[30px]"><FaUser /></i>
                            <h3 className=" text-blue-700 font-semibold">ESSENTIAL <span className="text-gray-800">NG</span></h3>
                        </div>
                        <div className={`${style.inputContainer} space-y-5  w-full`}>
                            <span className={`${style.smTxt} text-gray-500 text-[20px]  `}>Login to mail</span>
                            <div>
                                <div className=' text-start font-bold'>
                                    <p className='text-[18px] '>Log in</p>
                                </div>
                                <div className="block space-y-5">
                                <div className="relative flex items-center">
                                    <input name="email" type="email" required className="bg-white border border-gray-300 w-full text-[16px] px-4 py-[18px] rounded-md outline-blue-300" placeholder="E-mail" />
                                </div>
                                <div className="relative flex items-center">
                                    <input name="password" type="password" required className="bg-white border border-gray-300 w-full text-[16px] px-4 py-[18px] rounded-md outline-blue-300" placeholder="Password" />
                                </div>
                            </div>
                            </div>
                            <div className={`${style.signInBtn}`}>
                                <button type="button" className=" w-[219px] py-[15px] text-[24px] rounded text-white bg-blue-700 hover:bg-blue-400 focus:outli self-start">
                                    Sign in
                                </button>
                            </div>
                        
                        </div>
                    </form>

                </div>
        
            </div>
            <Footer/>
    </div>
    )
}

export default Login;