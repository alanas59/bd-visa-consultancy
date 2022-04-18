import React from 'react';
import './Extra.css';
import extra from '../../../images/extra.jpg';

const Extra = () => {
    return (
        <div className='container' style={{marginTop:'80px',marginBottom:'80px'}}>
            <h2 className='text-center text-primary m-5'>Visa & Immigration</h2>
            <div className="row">
                <div className="col-lg-6 px-3 mb-5">
                   <h2>The Leading Visa & Immigration Expert Lawyers Since 2000</h2>
                   <p>The Most Trusted Immigration and Visa Consultant. There are locations in the United states of america as well as internationally. The organization was established in 2000 on the basis of a small idea conceived by its promoters! We assist applicants in navigating the immigration process to any country in which they choose to live.</p>
                   <button className='btn btn-primary'>Learn More</button>
                </div>
                <div className="col-lg-6">
                    <img className='w-100' src={extra} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Extra;
