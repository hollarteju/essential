import React from "react";
import style from "./email.module.css";
import EmailInbox from "../../componenets/emailMessages";
import CalendarPage from "../../componenets/calendar";
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
import { BiSolidUserRectangle } from "react-icons/bi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import {CiMemoPad} from "react-icons/ci";
import {BiSolidChat} from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import {TiThMenu} from "react-icons/ti"


const Email = ()=>{
   
    return(
        <div class={`${style.inboxContainer} relative `}>
            <div class={`${style.navBar}gap-[5rem] flex justify-between items-center lg:pl-[5%] lg:pr-[2%] md:pl-[0%] md:pr-[0%] text-center py-4`}>
                <div className="lg:hidden md:flex md:flex-col">
                    <div className=" flex justify-between items-center text-center px-2 bg-gradient-to-r from-blue-700 to-blue-500">
                        <div className="w-[25px] items-center text-center">
                            <i class="lg:w-[25px] lg:h-[25px]"><TiThMenu size="100%" color="white"/></i>
                        </div>
                        <div class=" relative cursor-pointer">
                            <Image className={`${style.image} rounded-[50%]`} src="/image/user.png" width={50} height={50} alt="profile image" />
                        </div>
                    </div>
                    <div class={`${style.search} flex w-[100vw] text-[#747474] px-3 border-b items-center text-center`}>
                        <i class="w-[20px] h-[20px]"><IoSearchOutline size="100%"/></i>
                        <input type="text" class="w-full px-4 py-[15px] text-[15px] font-[400] text-black outline-none" />
                    </div>
                </div> 
                <div class={`${style.logoLayer} lg:flex md:hidden lg:gap-[6rem]  items-center text-center`}>
                    <p className="text-blue-500 font-[400] text-[20px]">ESSENTIAL <span class="text-black">NG</span></p>
                    <div class={`${style.search} flex 2xl:w-[850px] lg:w-[637px] px-4 bg-[#EEF8FF] rounded-[10px] text-[#747474] items-center text-center`}>
                        <i class="lg:w-[20px] lg:h-[20px]"><IoSearchOutline size="100%"/></i>
                        <input type="text" class="w-full px-4 bg-[#EEF8FF] py-[15px] text-[16px] font-[400] text-black outline-none" />
                        <div class="flex gap-2 text-[12px] font-[400] items-center text-center cursor-pointer">
                            <h5>Option</h5>
                            <span class="lg:w-12px lg:h-[12px]"><IoIosArrowDown size="100%"/></span>
                        </div>
                    </div> 
                </div>

                <div class={`${style.profilePics} lg:flex md:hidden gap-5 text-center items-center`}>
                    <i class="lg:w-[20px] lg:h-[20px] text-blue-700 cursor-pointer"><FaCog  size="100%"/></i>
                    <div class=" relative cursor-pointer">
                        <Image className={`${style.image} rounded-[50%]`} src="/image/user.png" width={50} height={50} alt="profile image" />
                    </div>
                </div>
            </div>
            <div class={`${style.inboxTabs} grid grid-cols-6 gap-3`}>
             <div className={`${style.inboxLink} lg:ml-8 md:ml-2 lg:relative lg:flex lg:flex-col left-0 gap-8 relative lg:w-full `}>
                    <div class={`${style.menu} lg:col-span-1`}>
                        
                        <div className="flex gap-2 bg-[#4772E2] 2xl:text-[20px] lg:text-[15px] font-[400] mr-[2rem] text-center text-center items-center px-4 py-3 rounded-[5px] text-white transform hover:bg-blue-500 cursor-pointer">
                            <i className="2xl:w-[20px] 2xl:h-[20px] lg:w-[15px] lg:h-[15px]"><HiPencilAlt size="100%" /></i>
                            <p>Compose</p>
                        </div>
                        {group_btns_one.map((btn, index)=>(
                            <div key={index} className="flex gap-2   leading-3 text-center items-center font-[400] px-4 py-3 transform hover:scale-110 cursor-pointer">
                            <i className="lg:w-[20px] lg:h-[20px]">{btn.icon}</i>
                            <p className="lg:block md:hidden">{btn.text}</p>
                            </div>
                        ))}
                   
                        <div>
                            {group_btns_two.map((btn, index)=>(
                                    <div key={index} className="flex gap-2 text-center items-center font-[400] px-4 py-3 transform hover:scale-110 cursor-pointer">
                                    <i className="lg:w-[20px] lg:h-[20px]">{btn.icon}</i>
                                    <p>{btn.text}</p>
                                    </div>
                                ))}
                        </div>
                        
                        <div>
                            {group_btns_three.map((btn, index)=>(
                                    <div key={index} className="flex gap-2 text-center items-center font-[400] px-4 py-3 transform hover:scale-110 cursor-pointer">
                                    <i className="lg:w-[20px] lg:h-[20px]">{btn.icon}</i>
                                    <p>{btn.text}</p>
                                    </div>
                                ))}
                        </div>
                        <div>
                            <div className={`${style.cog} lg:hidden md:flex gap-2 text-center items-center font-[400] px-4 py-3 transform hover:scale-110 cursor-pointer`}>
                                <i className="w-[20px] h-[20px]"><FaCog  size="100%"/></i>
                                <p>Setting</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="lg:col-span-4 px-2 w-full h-[100vh] overflow-scroll pb-[6rem]">
                    <header class={`${style.header}`}>
                        <div class={`${style.boxes} lg:h-[40px]`}></div>
                            <div className={`${style.reload} flex justify-between lg:w-full pl-4 pt-6 text-[#747474] items-center text-center`}>
                                <div class="flex gap-3">
                                    <div class="hidden flex items-center text-center text-[16px] text-start cursor-pointer">
                                        <i class="lg:w-[14px] lg:h-[14px]"><FaArrowLeft size="100%"/></i>
                                    </div>
                                    <div class="flex items-center text-center text-[16px] text-start cursor-pointer">
                                        <i class="lg:w-[14px] lg:h-[14px]"><MdOutlineCheckBoxOutlineBlank size="100%"/></i>
                                        <i class={`${style.arrowDown} lg:w-[6px] lg:h-[6px]`}><IoIosArrowDown size="100%"/></i>
                                    </div>
                                    <div className="flex gap-3 cursor-pointer">
                                        <i class="lg:w-[14px] lg:h-[14px]"><IoReload size="100%"/></i>
                                        <i class="lg:w-[14px] lg:h-[14px]"><BsThreeDotsVertical size="100%"/></i>
                                    </div>
                                    
                                </div>
                                <div class="flex gap-3 items-center">
                                    <div className="flex gap-2 text-[14px]">
                                        <span>1-50 of</span>
                                        <span>2,619</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <i class="lg:w-[14px] lg:h-[14px] cursor-pointer "><IoIosArrowBack size="100%"/></i>
                                        <i class="lg:w-[14px] lg:h-[14px] cursor-pointer "><IoIosArrowForward size="100%"/></i>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.indicators} pt-6 pb-3 pl-4 flex gap-[10rem] items-center text-center text-[14px] text-[#747474] font-[500] w-full`}>
                                <div className="flex gap-2 items-center text-center text-[#E96767] font-[500] cursor-pointer">
                                    <i className="lg:w-[22px] lg:h-[22px]"><MdGroups size="100%"/></i>
                                    <span>Primary</span>
                                </div>
                                <div className="flex gap-[5rem] ">
                                <div className="flex gap-2 items-center text-center cursor-pointer">
                                    <i className="lg:w-[22px] lg:h-[22px]"><MdGroups size="100%"/></i>
                                    <div className="block">
                                        <h6 className="flex gap-3">Social <p className="px-2 bg-[#3E6990] text-white rounded-[2px]">1 new</p></h6>
                                        <span className="font-[400] text-[12px]">Nextdoor, Message fro...</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center text-center cursor-pointer">
                                    <i className="lg:w-[22px] lg:h-[22px]"><FaTag size="100%"/></i>
                                    <div className="block ">
                                        <h6 className="flex gap-3">Promotions <p className="px-2 bg-[#20A028] text-white rounded-[2px]">6 new</p></h6>
                                        <span className="font-[400] text-[12px]">Lowe's Home Improvement</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center text-center cursor-pointer">
                                    <i className="lg:w-[22px] lg:h-[22px]"><FaExclamationCircle size="100%"/></i>
                                    <div className="block ">
                                        <p>Update</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section id="email_messages">
                        <EmailInbox />
                    </section>
                </div>
                <div class={`${style.scheduleTab} lg:col-span-1 lg:flex lg:flex-col sm:hidden gap-3 h-full`}>
                    <div className={`${style.scheduleIcons}  lg:flex lg:flex-row md:flex md:flex-col lg:gap-3 md:gap-2 bg-[#4772E2] text-[20px] font-[400] justify-center text-center items-center px-4 py-3 rounded-[5px] text-white`}>
                        <i className="lg:w-[20px] lg:h-[20px] cursor-pointer transform hover:scale-110"><BiSolidUserRectangle size="100%" /></i>
                        <i className="lg:w-[20px] lg:h-[20px] cursor-pointer transform hover:scale-110"><BsFillCalendar2DateFill size="100%" /></i>
                        <i className="lg:w-[20px] lg:h-[20px] cursor-pointer transform hover:scale-110"><CiMemoPad size="100%" /></i>
                        <i className="lg:w-[20px] lg:h-[20px] cursor-pointer transform hover:scale-110"><BiSolidChat size="100%" /></i>
                    </div>
                    <CalendarPage/>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Email;