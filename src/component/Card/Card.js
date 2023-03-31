import React, { useState } from 'react';
import './Card.css';
import { ToastContainer, toast } from 'react-toastify';

const Card = (props) => {
    const {poster, img, name, date, readTime, description} = props.card;
    const handleBookmark=props.handleBookmark;
    const handleSpentTime=props.handleSpentTime;

    const Toast=()=>{
        toast("already added");
    }


    return (
        <div className='border border-1 border-primary rounded-2 p-3'>
            <div>
                <img className='img-poster rounded-2' src={poster} alt="" />
            </div>
            <div className='d-flex mt-3'>
                <div className='d-flex align-items-start'>
                    <div>
                        <img className='img-author rounded-circle' src={img} alt="" />
                    </div>
                    <div className='ms-3'>
                        <h5>{name}</h5>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='d-flex ms-5'>
                    <p>{readTime} min read</p>
                    <button className='h-50 ms-2' onClick={()=>handleBookmark(description)}><i class="fa-solid fa-bookmark"></i></button>
                </div>
            </div>

            <h2>{description}</h2>
            <p className='btn btn-primary rounded-1' onClick={()=>handleSpentTime(readTime)}>Mark as read</p>

        </div>
    );
};

export default Card;