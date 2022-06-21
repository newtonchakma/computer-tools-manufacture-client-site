import React from 'react';
import {  BoxSeam, CheckCircle, People } from 'react-bootstrap-icons';

const BussnessSumary = () => {
    return (
     
        <div className="container py-24 mx-auto text-gray-600">
            <div className="flex flex-col text-center w-full mb-10">
            <h1 className=" font-medium text-5xl font-bold  mb-4 text-orange-600 uppercase">Bussness-Sumary</h1>
            </div>         
               <div className="flex flex-wrap text-center">

            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg ">
                    <People className="text-orange-500 w-12 h-12 mb-3 inline-block"></People>
                    <h2 className="title-font font-medium text-3xl text-gray-900">10.3M</h2>
                    <p className="leading-relaxed">Happy Customers</p>
                </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <CheckCircle className="text-orange-500 w-12 h-12 mb-3 inline-block"></CheckCircle>
                <h2 className="title-font font-medium text-3xl text-gray-900">45.8M</h2>
                <p className="leading-relaxed">Sold Out</p>
                </div>
            </div>
            
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <BoxSeam className="text-orange-500 w-12 h-12 mb-3 inline-block"></BoxSeam>
                <h2 className="title-font font-medium text-3xl text-gray-900">300.5M</h2>
                <p className="leading-relaxed">In Stock</p>
                </div>
            </div>
           
            </div>
        </div>
    
    );
};

export default BussnessSumary;