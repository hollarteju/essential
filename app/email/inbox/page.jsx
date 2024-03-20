import React from 'react';
import style from "./inbox.module.css";
import Image from 'next/image';

const Inbox =()=>{
    return(
        <main>
            <div className='flex justify-between items-center'>
                <div>
                    <p>Topic Ipsum Clerete Tyudo</p>
                    <div className='flex gap-2'>
                        <span>N</span>
                        <div>
                            <h4>Name Surname</h4>
                            <h6>Name Surname@essential.com</h6>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <i></i>
                </div>
            </div>
            <div>
                <div className='flex'>
                    <h3></h3>
                    <Image/>
                    <h3></h3>
                </div>
                <div className='flex gap-2'>
                    <i></i>
                    <h5>Reply</h5>
                </div>
            </div>
        </main>
    )
};

export default Inbox;