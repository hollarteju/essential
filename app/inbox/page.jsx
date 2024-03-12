import React from "react";
import style from "./inbox.module.css";
import InboxMessages from "../../componenets/inboxMessages";
import Image from "next/image";
import {group_btns_one, group_btns_two, group_btns_three} from "../items"
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaCog } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";



// Inbox page component
const Inbox = ()=>{
   
    return(
        <div class={`${style.inboxContainer}`}>
            <div class={`${style.navBar} flex justify-between items-center pl-[5%] pr-[2%] text-center py-4`}>

                <div class={`${style.logoLayer} flex gap-[6rem] items-center text-center`}>
                    <p className="text-blue-500 font-[400]">ESSENTIAL <span class="text-black">NG</span></p>
                    <div class={`flex lg:w-[850px] px-4 bg-[#EEF8FF] rounded-[10px] text-[#747474] items-center text-center`}>
                        <i class="lg:w-[20px] lg:h-[20px]"><IoSearchOutline size="100%"/></i>
                        <input type="text" class="w-full px-4 bg-[#EEF8FF] py-[15px] text-[16px] font-[400] text-black outline-none" />
                        <div class={`flex gap-2 text-[12px] font-[400] items-center text-center`}>
                            <h5>Option</h5>
                            <span class="lg:w-12px lg:h-[12px]"><IoIosArrowDown size="100%"/></span>
                        </div>
                    </div> 
                </div>

                <div class={`flex gap-5 text-center items-center`}>
                    <i class="lg:w-[20px] lg:h-[20px] text-blue-700"><FaCog  size="100%"/></i>
                    <div class=" relative">
                        <Image className="rounded-[50%]" src="/image/user.png" width={50} height={50} alt="profile image" />
                    </div>
                </div>
            </div>
            <div class={`${style.body} grid grid-cols-6 gap-3 `}>
                <div className="ml-8 flex flex-col gap-8">
                    <div class={`lg:col-span-1 `}>
                        <div className="flex gap-2 bg-[#4772E2] text-[20px] font-[400] text-center items-center px-4 py-3 rounded-[5px] text-white">
                            <i className="lg:w-[20px] lg:h-[20px]"><HiPencilAlt size="100%" /></i>
                            <p>Compose</p>
                        </div>
                        {group_btns_one.map((btn, index)=>(
                            <div key={index} className="flex gap-2 leading-3 text-center items-center font-[400] px-4 py-3">
                            <i className="lg:w-[20px] lg:h-[20px]">{btn.icon}</i>
                            <p>{btn.text}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        {group_btns_two.map((btn, index)=>(
                                <div key={index} className="flex gap-2 text-center items-center font-[400] px-4 py-3">
                                <i className="lg:w-[20px] lg:h-[20px]">{btn.icon}</i>
                                <p>{btn.text}</p>
                                </div>
                            ))}
                    </div>
                    
                    <div>
                        {group_btns_three.map((btn, index)=>(
                                <div key={index} className="flex gap-2 text-center items-center font-[400] px-4 py-3">
                                <i className="lg:w-[20px] lg:h-[20px]">{btn.icon}</i>
                                <p>{btn.text}</p>
                                </div>
                            ))}
                    </div>
                    
                </div>
                
                <div class={`lg:col-span-4 px-2 w-full`}>
                    <div class={`${style.boxes} lg:h-[40px]`}></div>
                    <div className="flex justify-between lg:w-full pl-4 pt-6 text-[#747474] items-center text-center">
                        <div class="flex gap-3">
                            <div class="flex items-center text-center text-[16px] text-start">
                                <i class="lg:w-[14px] lg:h-[14px]"><MdOutlineCheckBoxOutlineBlank size="100%"/></i>
                                <i class="lg:w-[6px] lg:h-[6px]"><IoIosArrowDown size="100%"/></i>
                            </div>
                            <div className="flex gap-3">
                                <i class="lg:w-[14px] lg:h-[14px]"><IoReload size="100%"/></i>
                                <i class="lg:w-[14px] lg:h-[14px]"><BsThreeDotsVertical size="100%"/></i>
                            </div>
                            
                        </div>
                        <div class="flex gap-3 items-center">
                            <div className="flex gap-2">
                                <span>1-50 of</span>
                                <span>2,619</span>
                            </div>
                            <div className="flex">
                                <i class="lg:w-[14px] lg:h-[14px]"><IoIosArrowBack size="100%"/></i>
                                <i class="lg:w-[14px] lg:h-[14px]"><IoIosArrowForward size="100%"/></i>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 pl-4 flex gap-[70px] items-center text-center text-[14px] text-[#747474] font-[500] w-full">
                        <div className="flex gap-2 items-center text-center text-[#E96767] font-[500]">
                            <i className="lg:w-[22px] lg:h-[22px]"><MdGroups size="100%"/></i>
                            <span>Primary</span>
                        </div>
                        <div className="flex gap-2 items-center text-center">
                            <i className="lg:w-[22px] lg:h-[22px]"><MdGroups size="100%"/></i>
                            <div className="block">
                                <h6 className="flex gap-3">Social <p className="px-2 bg-[#3E6990] text-white rounded-[2px]">1 new</p></h6>
                                <span className="font-[400] text-[12px]">Nextdoor, Message fro...</span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-center">
                            <i className="lg:w-[22px] lg:h-[22px]"><FaTag size="100%"/></i>
                            <div className="block ">
                                <h6 className="flex gap-3">Promotions <p className="px-2 bg-[#20A028] text-white rounded-[2px]">6 new</p></h6>
                                <span className="font-[400] text-[12px]">Lowe's Home Improvement</span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-center">
                            <i className="lg:w-[22px] lg:h-[22px]"><FaExclamationCircle size="100%"/></i>
                            <div className="block ">
                                <p>Update</p>
                            </div>
                        </div>
                    </div>
                    <InboxMessages/>
                </div>
                
                <div class={`lg:col-span-1 p-4 border`}>
                        calender
                </div>
            </div>
        </div>
    )
}

export default Inbox;