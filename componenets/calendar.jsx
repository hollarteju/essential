"use client";
import style from "./calendar.module.css";
import "./calendar.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import styled from "@emotion/styled";


import React from 'react';

const styledWrapper = styled.div`
.fc{
    color:red;
}
`;
const CalendarPage = ()=>{
   const trigger = (arg)=>{
    alert(arg.date);
   }
    return(
        <div className={`${style.container} h-full`}>
         
            <FullCalendar  dayHeaderClassNames={style.days} dayCellClassNames={style.cells} viewClassNames={style.slots}
            plugins = {[dayGridPlugin]}
            initialView = "dayGridMonth"
            headerToolbar= {{
                start:"title",
                center: "",
                end: "prev,next",
            }}
            selectable={true}
            selectMirror={true}
            nowIndicator={true}
            editable={true}
            
            // eventClick={trigger}
            eventBackgroundColor="blue"
            height="450px"
        
            
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
            <FullCalendar  dayHeaderClassNames={style.days} dayCellClassNames={style.cells} classN
            plugins = {[timeGridPlugin]}
            initialView = "timeGridDay"
            headerToolbar= {{
                start:"",
                center: "",
                end: "",
            }}
            
            height="700px"
            
            customButtons={{
                customHeader:{
                    click: function(){
                        alert("jhjgjh")
                    }
                }
            }}
            />
            
        </div>
    )
}

export default CalendarPage;