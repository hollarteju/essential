"use client";
import style from "./calendar.module.css";
import "./calendar.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from 'react';

const CalendarPage = ()=>{
    return(
        <div className={`${style.container} h-full`}>
            <FullCalendar  dayHeaderClassNames={style.days} dayCellClassNames={style.cells} classN
            plugins = {[dayGridPlugin]}
            initialView = "dayGridMonth"
            headerToolbar= {{
                start:"title",
                center: "",
                end: "prev,next",
            }}
            eventBackgroundColor="blue"
            
            customButtons={{
                customHeader:{
                    click: function(){
                        alert("jhjgjh")
                    }
                }
            }}
            titleFormat={{
                month: "long",
                year:"numeric",
                
            }}
            />
        </div>
    )
}

export default CalendarPage;