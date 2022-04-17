import React from 'react';
import pic from '../../images/pic.jpg';

const About = () => {
    return (
        <div className='text-center my-3'>
            <h2 className='text-primary'>About Myself</h2>
            <img src={pic} alt="" style={{width:'200px'}}/>
            <h4 className='mt-2'>Abdullah Al Anas</h4>
            <p className='w-50 mx-auto mb-5 mt-3' style={{textAlign:'justify',fontSize:'20px'}}>My aim is to become a full stack web developer.To reach my goal,I have joined programming hero's 5th batch as a student.Alhamdulliah I have Successfully completed 10 assignment and learned a lot of things which are related to development.I hope after finishing this course , I will try my best to get a job.So, I am still working hard to acheive my goal. </p>
        </div>
    );
};

export default About;