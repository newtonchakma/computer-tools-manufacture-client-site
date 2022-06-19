import React from 'react';
import about from '../../images/about.jpg'

const About = () => {
    return (
        <div className='flex mx-4 px-3 my-5 py-5 min-h-screen items-center flex-col lg:flex-row  h-full mt-5 pt-5 sm: h-full '>
           
            <div className='p-5 w-full justify-center '>
            <img className='shadow ' src={about} alt=""  />

            </div>
            <div className='pl-5 mt-4 justify-center '>
                <h1 className='text-2xl font-bold mb-5 pb-5'>Leading Manufacturing Company</h1>
                <p className='text-base'>
                Over 24 years experience and knowledge of international industrial systems, dedicated to provide the best economical solutions to our valued customers. We Won Many Factory Awards and Got Many Ceritificates Since 2001-2016. Who are so beguiled and demoralized by the charms.
                </p>
                <p className='text-base mt-2 mb-4'>
                International industrial systems, dedicated to provide the best economical solutions to our valued customers. We Won Many Factory Awards. We have a proven record of accomplishment and are a reputable company.

                </p>
                <button class="btn w-64 rounded-full btn-warning mt-5 text-white font-bold">Button</button>


            </div>
        </div>
        
    );
};

export default About;