"use client"
import {createContext, useState} from "react";

export const PostContext = createContext();

export const PostProvider = ({children})=>{
    const [nextBtn, setNextBtn] = useState("")

    function next_btn(param){
        setNextBtn(param)
    }

    return(
        <PostContext.Provider value={{nextBtn, next_btn}}>
            <div>{children}</div>
        </PostContext.Provider>
    )
}