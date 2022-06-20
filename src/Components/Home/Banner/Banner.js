import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
          <section id='banner' className="text-gray-600 body-font h-[500px]">
        <div className="container mx-auto flex items-center 
         h-full">
            <div className="flex flex-col items-center pt-5 mt-5 rounded-lg text-center mb-10 md:mb-0 md:w-[800px] mx-4 md:mx-0">
                <h1 className="title-font sm:text-2xl text-3xl md:text-6xl uppercase mb-4 font-medium text-white">Committed to  
                    <br className="hidden lg:inline-block"/> Supirior Quality.
                </h1>
                <p className="leading-relaxed md:text-xl text-secondary pl-10 ">We Won Many Industrial Awards and Got Many eritiricates Since 2011-2022</p>
                <button className="btn btn-wide my-8 btn-outline btn-secondary font-bold text-2xl">JOIN NOW</button>
            </div>  
        </div>
    </section> 
       
    );
};

export default Banner;