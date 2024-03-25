import React from 'react';
import style from "./message.module.css";
import Image from 'next/image';
import { CgArrowsExpandRight } from 'react-icons/cg';
import { PiArrowBendDoubleUpRight } from 'react-icons/pi';
import { FiPrinter } from 'react-icons/fi';
import { FaArrowLeft } from "react-icons/fa6";

const Message =()=>{
    return(
        <div className="w-full">
            <nav className='lg:hidden fixed px-3 w-full z-50 left-0 py-[20px] bg-gradient-to-r from-blue-700 to-blue-500'>
                <div className='w-[20px] h-[20px]'>
                    <i class="w-[20px] h-[20px]"><FaArrowLeft size="100%" color="white"/></i>
                </div>
            </nav>
            <section className='px-3 pt-[5rem] h-full'>
                <div className='flex justify-between items-center border-t border-b'>
                    <div className='font-[600]'>
                        <p className='2xl:text-[20px] md:text-[15px] px-2'>Topic Ipsum Clerete Tyudo</p>
                        <div className='flex gap-2 font-[500] items-center'>
                            <div>
                                <span className='2xl:text-[16px] md:text-[12px] rounded-[50%] font-[200] text-white px-[5px]  bg-blue-500 '>N</span>
                            </div>
                            
                            <div className=''>
                                <h4 className='2xl:text-[14px] md:text-[11px] '>Name Surname</h4>
                                <h6 className='2xl:text-[10px] md:text-[8px]  text-[#141617] font-[400]'>Name Surname@essential.com</h6>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.printer} lg:flex gap-3 text-[#141617]`}>
                        <i className='cursor-pointer '><PiArrowBendDoubleUpRight/></i>
                        <i className='cursor-pointer '><FiPrinter/></i>
                        <i className='cursor-pointer '><CgArrowsExpandRight/></i>
                    </div>
                </div>
                <div className={`${style.inboxMessage} relative w-full h-full  2xl:text-[16px] lg:text-[12px] font-[400] py-5 flex flex-col gap-2`}>
                    <div>
                        <p >
                        Lorem ipsum dolor sit amet consectetur. At diam et
                        adipiscing tempus turpis hac adipiscing viverra accumsan.
                        Lorem ipsum dolor sit amet consectetur. At diam et
                        adipiscing tempus turpis hac adipiscing viverra accumsan.
                                                            
                        </p>
                    </div>
                    <div >
                        <Image src="/image/mail_pix.png" width={585} height={692}/>
                    </div>
                    <div>
                        <p >
                        Lorem ipsum dolor sit amet consectetur. At diam et
                        adipiscing tempus turpis hac adipiscing viverra accumsan.
                        Lorem ipsum dolor sit amet consectetur. At diam et
                        adipiscing tempus turpis hac adipiscing viverra accumsan.
                                                            
                        </p>
                    </div>
                    <button className='absolute transform hover:bg-blue-500 cursor-pointer text-white bg-[#4772e2] 2xl-text-[20px] lg-text-[15px] 2xl:w-[233px] lg:w-[174px] md:w-[174px] py-2 shadow-2xl shadow rounded-[10px]'>Reply</button>
                </div>
            </section>
        </div>
    )
};

export default Message;