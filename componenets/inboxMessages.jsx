"use client";
import { React, useEffect, useState } from "react";
import style from "../app/inbox/inbox.module.css"
import { IoIosStarOutline } from "react-icons/io";
import { TbArrowBadgeRight } from "react-icons/tb";
import { ImFolderDownload } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { FaEnvelopesBulk } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";


export default function InboxMessages(){
    const [names, setNames] = useState([]);
    const [messages, setMessages] = useState([]);
   

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const name = await fetch("https://dummyjson.com/users?limit=50")
                const messages = await fetch("https://dummyjson.com/posts?limit=50")
                const name_data = await name.json();
                const message_data = await messages.json();
                setNames(name_data.users);
                setMessages(message_data.posts)
               
            }catch(error){
                alert("error")
            }    
        }
        fetchData()
        
    },[])

    return(

        <div className={`${style.messagesCon} flex  w-full bg-gray-700`}>
            <ul className="w-full items-center block ">
                {names.map((name,index)=>(
                    <li style={{borderInline:"none"}}  key={index} className="relative flex pl-4 border border-gray-100 py-2 justify-between text-center items-center text-[14px] text-gray-700 font-[400] cursor-pointer">
                    <div style={{marginRight:"4rem"}} className="flex gap-[3rem] overflow-hidden w-full relative items-center text-center">
                        <div style={{width:"200px"}} className="flex  gap-2 text-center items-center w-[200px]">
                            <i className="w-[18px] h-[18px] text-gray-400 relative"><MdOutlineCheckBoxOutlineBlank size="100%"/></i>
                            <i className="w-[18px] h-[18px] text-gray-400 relative"><IoIosStarOutline size="100%"/></i>
                            <i className="w-[18px] h-[18px] text-gray-400 relative"><TbArrowBadgeRight size="100%"/></i>
                        <div className=" flex overflow-hidden lg:w-[25px] ">
                            <p style={{whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{name.firstName} {name.lastName}</p>
                        </div>
                        </div>
                   
                        <div  className=" text-start  items-center flex gap-2 ">
                            <div  style={{maxWidth:"186px", overflow:"hidden"}} >
                            <span style={{whiteSpace:"nowrap", textOverflow:"ellipsis"}} >{messages[index].title}</span>
                            </div>
                            <div  style={{ overflow:"hidden"}}>
                            <span style={{whiteSpace:"nowrap", textOverflow:"ellipsis"}} className="bg-red" > -{messages[index].title}</span>
                            </div>
                        </div>
                    </div>
                    <div style={{whiteSpace:"nowrap", textOverflow:"ellipsis"}} className={`${style.time} relative w-[100px] self-end font-[500]`}>
                        <h4>2:23 PM</h4>
                        <div className={`${style.messagesIcons} flex gap-2 hidden`}>
                            <i className="w-[18px] h-[18px] text-gray-500 relative hover:scale-110 "><ImFolderDownload size="100%"/></i>
                            <i className="w-[18px] h-[18px] text-gray-500 relative hover:scale-110 "><MdDelete size="100%"/></i>
                            <i className="w-[18px] h-[18px] text-gray-500 relative hover:scale-110 "><FaEnvelopesBulk size="100%"/></i>
                            <i className="w-[18px] h-[18px] text-gray-500 relative hover:scale-110 "><FaClock size="100%"/></i>
                        </div>
                    </div>
                </li>
                ))}
                
            </ul>
        </div>
    )
};
