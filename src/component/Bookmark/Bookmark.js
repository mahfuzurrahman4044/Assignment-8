import React from 'react';
import './Bookmark.css';

const Bookmark = ({ number, spentTime, description }) => {

    return (
        <div className='bookmark'>
            <div className='border border-solid border-1 border-primary rounded-1 p-2 spent-time'>
                Spent time on read : {spentTime} min
            </div>

            <div className='mt-3 border border-solid border-1 border-primary rounded-1 p-2 number-of-bookmark'>
                Bookmarked Blogs : {number}
            </div>

            {
                description.map((descriptionTitle, index) => {
                    return (
                        <p key={index} className='mt-3 border border-solid border-1 border-primary rounded-1 p-2 number-of-bookmark'>{descriptionTitle}</p>
                    )

                })
            }
        </div>
    );
};

export default Bookmark;