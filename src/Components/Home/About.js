import React from 'react';
import about from '../../images/about.jpg'

const About = () => {
    return (
        <div className='min-h-screen p-5 h-full  sm: h-full'>
            <div className=' mt-5 pt-5 font-bold text-center'>
                <h1 className='text-orange-600 mt-5 pt-4 md:text-4xl  text-2xl uppercase'>About Us</h1>
            </div>
       
        <div className='flex mx-4 px-3 mb-3  items-center flex-col lg:flex-row '>
           
            <div className=' w-full justify-center '>
            <img className='shadow rounded-lg' src={about} alt=""  />

            </div>
            <div className='pl-5  justify-center '>
                <h1 className=' mb-2 pb-2 pt-5 md:text-3xl uppercase text-xl md:mt-4 sm:pt-4'>Leading Manufacturing Company</h1>
                <p className='text-base'>
                Over 24 years experience and knowledge of international industrial systems, dedicated to provide the best economical solutions to our valued customers. We Won Many Factory Awards and Got Many Ceritificates Since 2001-2016. Who are so beguiled and demoralized by the charms.
                </p>
                <p className='text-base  mb-2'>
                International industrial systems, dedicated to provide the best economical solutions to our valued customers. We Won Many Factory Awards. We have a proven record of accomplishment and are a reputable company.

                </p>
                <button className="btn w-64 rounded-full btn-warning mt-3 text-white font-bold">get in touch</button>


            </div>
        </div>
        </div>
        
    );
};

export default About;