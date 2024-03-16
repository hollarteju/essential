"use client";
import style from "./calendar.module.css";
import "./calendar.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "@emotion/styled";

import React from 'react';

const CalendarPage = ()=>{
    const styledWrapper = styled.div`
    .fc-direction-ltr{
        color:red
    }`
    return(
        <div className={`${style.container} h-full`}>
            <styledWrapper>
            <FullCalendar  dayHeaderClassNames={style.days} dayCellClassNames={style.cells} classN
            plugins = {[dayGridPlugin]}
            initialView = "dayGridMonth"
            headerToolbar= {{
                start:"title",
                center: "",
                end: "prev,next",
            }}

            height="350px"
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
            </styledWrapper>
            
        </div>
    )
}

export default CalendarPage;