// "use client"
// import React from 'react';
// import style from "./login.module.css"
// import Link from 'next/link';
// import { FaUser } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// import { CiLock } from "react-icons/ci";
// import { FaRegEnvelope } from "react-icons/fa6";
// import Footer from "../../componenets/footer"

// const Register = ()=>{
//     function next_btn(param){
        
//         if(param === "1"){
//             document.getElementById("form-one").style.transform = 'translateX(-40rem)';
//             document.getElementById("form-two").style.right = "0rem"
//             document.getElementById("form-two").style.transform = 'translateX(0rem)';
            
//         }
//         if(param === "2"){
//             document.getElementById("form-two").style.transform = 'translateX(-40rem)';
//             document.getElementById("form-three").style.right = "0rem"
//             document.getElementById("form-three").style.transform = 'translateX(0rem)';
            
//         }
//         if(param === "3"){
//             document.getElementById("form-three").style.transform = 'translateX(-40rem)';
//             document.getElementById("form-four").style.right = "0rem"
//             document.getElementById("form-four").style.transform = 'translateX(0rem)';
            
//         }
//         if(param === "4"){
//             document.getElementById("form-container").style.display = 'none';
//             document.getElementById("message").style.display = "block"
            
//         }
        
//     }

//     return(
//     <div class={`${style.container} font-[sans-serif] text-gray-800 bg-white max-w-screen block items-center mx-auto md:h-[100vh] p-4 font-lato`}>
//             <div  class={`${style.logoContainer} flex gap-[12px] items-center py-2 md:px-[10%] sm:px-[0px]`}>
//                 <p class={`${style.logo} px-6 bg-[#B80C09]  lg:text-[40px] text-white font-600 rounded-[16px] h-[65px]`}>e</p>
//                 <span class={`${style.logoSpan} text-[#4772E2] text-[16px]`}>Essential Mail</span>
//             </div>
//         <div className='flex flex-col justify-between h-[75vh]'>
//         <div class={`${style.registerContainer} items-center lg:py-[70px] md:py-[200px]`}>
//             <div id='form-container' className={`${style.formContainer} lg:grid lg:grid-cols-2 md:block items-center overflow-hidden md:h-551 2xl:max-w-[1139px] lg:max-w-[854px] 2xl:h-[551px] sm:h-[490px] md:max-w-[500px] sm:max-w-[320px] mx-auto`}>
//                 <div className="relative items-center h-full lg:w-full md:w-full overflow-hidden contents-center  mx-auto">
                
//                     <form id="form-one" className={`${style.formOne} h-full absolute border border-gray-300 rounded-md py-6 px-4  sm:px-4 text-center transition-all w-full `}>
//                         <div className={`${style.formHeader} mb-16 text-[24px]`}>
//                             <i class="text-[30px]"><FaUser /></i>
//                             <h3 className=" text-blue-700 font-semibold">ESSENTIAL <span className="text-gray-800">NG</span></h3>
//                             <h2  className=" text-[24px] mb-12">Create an Essential Account </h2>
//                         </div>
//                         <div className={`${style.inputContainer} space-y-5  w-full`}>
//                             <span className={`${style.smTxt} text-gray-500 text-[20px]  `}>Enter your Name and Phone number</span>
//                             <div className="grid md:grid-cols-2  gap-[17px]">
//                                 <div className="relative flex items-center">
//                                     <input name="first-name" type="text" required className="bg-white border border-gray-300 w-full text-[16px] px-4 py-[18px] rounded-md outline-blue-300" placeholder="First Name" />
//                                 </div>
//                                 <div className="relative flex items-center">
//                                     <input name="last-name" type="text" required className="bg-white border border-gray-300 w-full text-[16px] px-4 py-[18px] rounded-md outline-blue-300" placeholder="Last Name" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="relative flex items-center">
//                                     <input name="email" type="text" required className="bg-white border border-gray-300 w-full text-[16px] px-4 py-[18px] rounded-md outline-blue-300" placeholder="Phone Num or Email" />
//                                 </div>
//                             </div>
//                             <div className={style.loginBtn}>
//                                 <button type="button" onClick={()=>next_btn("1")} className=" w-[219px] py-[15px] text-[24px] rounded text-white bg-blue-700 hover:bg-blue-400 focus:outli self-start">
//                                     Next
//                                 </button>
//                             </div>
                        
//                         </div>
//                     </form>

//                     <form id="form-two" className={`${style.formTwo} h-full absolute border border-gray-300 rounded-md py-6 px-4  sm:px-4 text-center transition-all w-full`}>
//                         <div className={`${style.formHeader} mb-16 text-[24px]`}>
//                             <i class="text-[30px]"><SlCalender /></i>
//                             <h3 className=" text-blue-700 font-semibold">ESSENTIAL <span className="text-gray-800">NG</span></h3>
//                             <h2  className=" text-[24px] mb-12">Create an Essential Account </h2>
//                         </div>
//                         <div className={`${style.inputContainer} space-y-5  w-full`}>
//                             <span className={`${style.smTxt} text-gray-500 text-[20px]  `}>Date of Birth</span>
//                             <div className=" gap-[17px] flex ">
//                                 <div className={`${style.day} relative flex items-center`}>
//                                     <input name="day" type="text" required className=" border border-gray-300 text-[16px] px-4 py-[18px] rounded-md outline-blue-300 w-full" placeholder="Day" />
//                                 </div>
//                                 <div className={`${style.month} relative items-center `}>
//                                     <input name="month" type="text" required className="bg-white border border-gray-300  text-[16px] px-4 py-[18px] rounded-md outline-blue-300 w-full" placeholder="Month" />
//                                 </div>
//                                 <div className={`${style.year} relative flex items-center`}>
//                                     <input name="year" type="text" required className="bg-white border border-gray-300  text-[16px] px-4 py-[18px] rounded-md outline-blue-300 w-full" placeholder="Year" />
//                                 </div>
//                             </div>
//                             <div class="w-full text-gray-400">
//                                 <select class="w-full border border-gray-300 text-[12px] px-4 py-[18px] rounded-md outline-blue-300">
//                                     <option value="" disabled selected>Gender</option>
//                                     <option value="Male" >Male</option>
//                                     <option value="Female" >Female</option>
//                                 </select>
//                             </div>
//                             <div className={style.loginBtn}>
//                                 <p className={`self-start text-gray-500    `}>Date | Month | Year</p>
                        
//                                 <button type="button" onClick={()=>next_btn("2")} className=" w-[219px] py-[15px] text-[24px] rounded text-white bg-blue-700 hover:bg-blue-400 focus:outline-none self-start">
//                                     Next
//                                 </button>
//                             </div>
                        
//                         </div>
//                     </form> 
                    
//                     <form id="form-three" className={`${style.formThree} h-full absolute border border-gray-300 rounded-md py-6 px-4  sm:px-4 text-center transition-all w-full`}>
//                         <div className={`${style.formHeader} mb-16 text-[24px]`}>
//                             <i class="text-[30px]"><CiLock /></i>
//                             <h3 className=" text-blue-700 font-semibold">ESSENTIAL <span className="text-gray-800">NG</span></h3>
//                             <h2  className=" text-[24px] mb-12">Create an Essential Account </h2>
//                         </div>
//                         <div className={`${style.inputContainer} space-y-5  w-full`}>
//                             <span className={`${style.smTxt} text-gray-500 text-[20px]  `}>Set your Password</span>
                        
//                             <div className="relative flex items-center">
//                                 <input name="password" type="password" required className="bg-white border border-gray-300 w-full text-[16px] px-4 py-[18px] rounded-md outline-blue-300" placeholder="Password" />
//                             </div>
//                             <div className="relative flex items-center">
//                                 <input name="confirm-password" type="password" required className="bg-white border border-gray-300 w-full text-[16px] px-4 py-[18px] rounded-md outline-blue-300" placeholder="Re-enter Password" />
//                             </div>
                            
//                             <div className={style.loginBtn}>
//                                 <button type="button" onClick={()=>next_btn("3")} className=" w-[219px] py-[15px] text-[24px] rounded text-white bg-blue-700 hover:bg-blue-400 focus:outline-none self-start">
//                                     Next
//                                 </button>
//                             </div>
                        
//                         </div>
//                     </form> 

//                     <form id="form-four" className={`${style.formFour} h-full absolute border border-gray-300 rounded-md py-6 px-4  sm:px-4 text-center transition-all w-full`}>
//                         <div className={`${style.formHeader} mb-16 text-[24px]`}>
//                             <i class="text-[30px]"><FaRegEnvelope /></i>
//                             <h3 className=" text-blue-700 font-semibold">ESSENTIAL <span className="text-gray-800">NG</span></h3>
//                             <h2  className=" text-[24px] mb-12">Create an Essential Account </h2>
//                         </div>
//                         <div className={`${style.inputContainer} space-y-5  w-full`}>
//                             <span className={`${style.smTxt} text-gray-500 text-[20px]  `}>Select Address</span>
                        
//                             <div className="relative flex items-center">
//                                 <input name="email" type="email" required className="bg-white border border-gray-300 w-full text-[16px] px-4 py-[18px] rounded-md outline-blue-300" placeholder="Enter a username" />
//                             </div>
                            
//                             <div className={style.loginBtn}>
//                                 <button type="button" onClick={()=>next_btn("4")} className=" w-[219px] py-[15px] text-[24px] rounded text-white bg-blue-700 hover:bg-blue-400 focus:outline-none self-start">
//                                     Next
//                                 </button>
//                             </div>
                        
//                         </div>
//                     </form>
                    
//                 </div>
//                 <div className={`${style.rightCard} max-md:order-1 flex flex-col  justify-center space-y-16 max-md:mt-16 min-h-full bg-white lg:px-[100px] px-4 py-4`}>
//                     <div>
//                         <h4 className="text-dark text-[32px] text-lg font-semibold">Welcome to Essential</h4>
//                         <p className="text-[16px] text-dark mt-2">
//                             Essential is the home of everything better for
//                             the developement of ur ife and integration.
//                         <p><Link href="#" className="text-blue-800">Already have an account? </Link></p>  
//                         </p>
//                     </div>
//                     <Link href="/login" className={style.loginBtn}>
//                         <button type="button" className=" w-[219px] py-[15px] text-[24px] rounded text-white bg-blue-700 hover:bg-blue-400 focus:outline-none self-start">
//                             Sign in
//                         </button>
//                     </Link>
//                 </div>
        
//             </div>
//             <div id='message' className={`${style.message} lg:h-[475px] mx-auto items-center relative self-center  py-6 px-4  sm:px-4 text-center lg:w-[550px] sm:w-[320px]`}>
//                 <div className="mt-[4rem]">
//                     <p className="text-[32px] ">Welcome to Essential</p>
//                     <h3 className="text-[40px] font-300 pt-4 pb-10 ">We Are Login you in</h3>
//                     <div className={`${style.messageLogo} text-[24px]`}>
//                         <h4 className=" text-blue-700 ">ESSENTIAL <span className="text-gray-800">NG</span></h4>
//                     </div>
//                 </div>
//             </div>
//         </div>
//             <Footer/>
//         </div>
//     </div>
//     )
// }

// export default Register