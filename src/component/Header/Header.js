import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <h2>Knowledge Cafe</h2>
                <div className=''>
                    <img className='img-header rounded-circle' src="https://hips.hearstapps.com/hmg-prod/images/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg?resize=1200:*" alt="" />
                </div>
            </div>
            <hr />
        </div>

    );
};

export default Header;