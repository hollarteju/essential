import React from "react";
import style from "./home.module.css";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import {MdGroups} from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {frequency, solution, contacts, contact_link} from "./items";

export default function Service(){
    
    return(
    <div>
        <div className={`${style.serviceContainer} px-[10%]  text-center flex flex-col gap-[88px] py-[150px]`}>
            <div className={`${style.serviceHd}`}>
                <p className="text-[40px] font-[700]">What we do</p>
                <h6 className="font-[500] text-[20px] px-[10%]">
                Lorem ipsum dolor sit amet consectetur. Rhoncus dignissim ultrices posuere ut ornare ullamcorper nisl. Sed magna aliquam nibh id. Tincidunt adipiscing pharetra
                enim vel sem. Cras nunc duis non cursus aliquam. Vestibulum velit tincidunt massa diam diam habitasse.
                </h6>
            </div>
            <div className="flex gap-[47px] w-full items-center justify-center">
                <div className={ `${style.serviceCard} relative lg:w-[451px] lg:h-[393px] bg-[#F0F0F0] flex flex-col gap-[58px] py-[5%] px-[3%]`}>
                    <div className="">
                        <div className=" w-[52px] mx-auto">{<FaBell size="70%" color="#B80C09" />}</div>
                        <p className="text-[32px] font-[600]">Mail Scheduling</p>
                    </div>
                    <div>
                        <span className="text-[16px] font-[500]">Lorem ipsum dolor sit amet consectetur. Pulvinar turpis rhoncus massa commodo </span>
                    </div>
                    
                </div>
                <div className={ `${style.serviceCard} relative lg:w-[451px] lg:h-[393px] bg-[#F0F0F0] flex flex-col gap-[58px] py-[5%] px-[3%]`}>
                    <div className="">
                        <div className=" w-[52px] mx-auto">{<FaRegEnvelope size="70%" color="#B80C09" />}</div>
                        <p className="text-[32px] font-[600]">24/7 Mailing system</p>
                    </div>
                    <div>
                        <span className="text-[16px] font-[500]">Lorem ipsum dolor sit amet consectetur. Pulvinar turpis rhoncus massa commodo </span>
                    </div>
                    
                </div>
                <div className={ `${style.serviceCard} relative lg:w-[451px] lg:h-[393px] bg-[#F0F0F0] flex flex-col gap-[20px] py-[5%] px-[3%]`}>
                    <div className="">
                        <div className=" w-[52px] mx-auto">{<MdGroups size="70%" color="#B80C09" />}</div>
                        <p className="text-[32px] font-[600]">Send Multiple mail at once</p>
                    </div>
                    <div>
                        <span className="text-[16px] font-[500]">Lorem ipsum dolor sit amet consectetur. Pulvinar turpis rhoncus massa commodo </span>
                    </div>
                    
                </div>
            </div>
            <div className="text-[20px] font-[500] px-[10%]">
                <span >
                Lorem ipsum dolor sit amet consectetur. Ac neque lectus nunc mattis morbi aenean quam tristique et. 
                Scelerisque nibh arcu et tortor aliquam. Vitae pellentesque augue nascetur velit. Dictum malesuada 
                hendrerit sagittis eu tellus turpis lacinia massa eget. Vivamus a eget in nulla metus. Sit vulputate 
                convallis ac venenatis. Ultrices id mollis vel ornare amet pulvinar. Luctus commodo posuere ullamcorper 
                ut tellus montes risus blandit lectus.Nulla vitae condimentum felis enim.<Link href="#" class="text-[#4772E2]"> Terms and Conditions</Link> donec
                 risus ipsum. Accumsan viverra morbi suspendisse id scelerisque sit.
                </span>
            </div>
        </div>
        <div class={`${style.mobileContainer} bg-[#F0F0F0] w-full py-[88px]`}>
                <div className="flex justify-between pb-[100px]  items-center px-[10%]">
                    <div class={`${style.mobile} lg:h-677px lg:w-762px rounded-[47px]`}></div>
                    <div className="flex flex-col gap-[3rem]">
                       
                            <span class="lg:w-593px rounded-[17px] border border-black py-[2rem] px-[2rem] text-center text-[20px] font-[500]">
                                Lorem ipsum dolor sit amet consectetur. Rhoncus dignissim ultrices posuere ut
                                 ornare ullamcorper nisl. Sed magna aliquam nibh id. Tincidunt adipiscing pharetra
                                  enim vel sem. Cras nunc duis non cursus aliquam. Vestibulum velit tincidunt massa
                                   diam diam habitasse.
                            </span>
                        
                       
                            <span class="lg:w-593px rounded-[17px] border border-black py-[2rem] px-[2rem] text-center text-[20px] font-[500]">
                                    Lorem ipsum dolor sit amet consectetur. Rhoncus dignissim ultrices posuere ut
                                    ornare ullamcorper nisl. Sed magna aliquam nibh id. Tincidunt adipiscing pharetra
                                    enim vel sem. Cras nunc duis non cursus aliquam. Vestibulum velit tincidunt massa
                                    diam diam habitasse.
                            </span>
                        
                    </div>
                </div>
            </div>
            <div className={`${style.frequency} bg-[#1F2944] py-[88px] w-full`}>
                <div className="mx-[10%] text-white flex flex-col gap-[8rem]">
                    <p className="text-center text-[40px] font-[900]">Frequentlly asked question</p>
                    <div class="flex justify-between w-full items-center">
                        <div class="lg:w-[552px] flex flex-col gap-[4rem] pb-[100px]">
                            {frequency.map((x)=>(
                                <div class={`${style.smTxt} flex text-[24px] font-[500] items-center gap-[1rem]`}>
                                <FaPlusSquare size="24px" />
                                <span>{x.text}</span>
                            </div>
                            ))}
                        </div>
                        <div class={`${style.frameIcon} lg:w-[720px] lg:h-[393px]`}></div>
                    </div>
                
                </div>
                
            </div>
            <div className={`${style.solutionCnt} bg-[#F0F0F0] pl-[5%] relative py-[100px]  flex flex-col gap-[50px]`}>
                <div className="text-[24px] font-[700]">
                    <p>Other Essential Solutions</p>
                </div>
                <div class="flex text-center gap-[30px]">
                    {solution.map((x)=>(
                        <div className={`${style.solutionCard} flex flex-col gap-[2rem] px-[0.5rem] pt-[6rem] lg:w-[259px] lg:h-[305px] rounded-[10px] bg-[#F5F5F5]`}>
                            <p className="text-[24px] font-[700] text-[#333333]">{x.headline}</p>
                            <span className="text-[16px] font-[500]">
                                Lorem ipsum dolor sit amet consectetur. At diam et
                                 adipiscing tempus turpis hac adipiscing viverra accumsan.
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-white bg-[#4772E2] w-full relative py-[100px] pb-[200px] px-[5%]">
                <div className={`${style.contacts} flex justify-between`}>
                    <div className="flex flex-col gap-[1rem] lg:w-[260px]">
                        <p className="text-[20px] font-[700]">About</p>
                        <span className="text-[16px] font-[400]">
                            Your customers are your most important source of feedback.
                             Essential Direct allows you to monitor and respond to reviews across
                              platforms quickly from one place.
                        </span>
                    </div>
                    {contacts.map((items)=>(
                    <div key={items.number} className="flex flex-col">
                        <p className="text-[20px] font-[700] mb-[1rem]">{items.headline}</p>
                        {items.links.map((x)=>(
                        <div key={items.number} className="flex flex-col pb-[0.4rem]">
                            <span className="text-[16px] font-[400]" key={index}><Link href="#">{x}</Link></span>
                         </div>
                        ))}
                    </div>
                    ))}
                    <div className="flex flex-col  lg:w-[260px]">
                        <p className="text-[20px] font-[700] mb-[1rem]">Connect With Us</p>
                        {contact_link.map((x)=>(
                            <div className="flex flex-col pb-[0.4rem]">
                                <span className="text-[16px] font-[400]"><Link href="#">{x}</Link></span>
                            </div>
                            ))}
                        <div class="flex flex-col gap-[1rem]">
                            <p class="font-[700] mt-[1rem]">Follow us</p>
                            <div class={`${style.contactIcons} flex text-[50px] gap-[0.4rem]`}>
                                <FaFacebook />
                                <FaSquareInstagram/>
                                <FaLinkedin />
                                <FaSquareXTwitter />
                            </div>
                            </div>
                        <div/>
                    </div>

                </div>
            </div>
    </div>
    )
}