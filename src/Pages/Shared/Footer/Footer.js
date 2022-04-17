import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-info py-3'>
            <p 
            style={{fontSize:'20px'}} 
            className='text-center'
            ><small>copyright@{year}</small></p>
        </div>
    );
};

export default Footer;