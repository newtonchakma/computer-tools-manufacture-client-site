import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div id='contact' className='px-5 h-[550px] '>
            <div className='my-9 mt-5 pt-5 font-bold text-center'>
                <h1 className='text-white md:text-4xl pt-9 mt-8 text-2xl uppercase'>Have Any Question ? <span className='text-secondary'>Contact Us</span></h1>
            </div>
            <div className='w-[750] mt-4 pt-5 mx-auto max-w-xl'>
                <form className='mx-auto w-full'>
                <input type="email" placeholder="Email" className="input w-full max-w-xl shadow-inner"required />
                <div className="flex max-w-xl mt-4 mx-auto">
                   <input type="text" placeholder="FastName" className="input w-full max-w-xs shadow-inner" required />
                   <input type="text" placeholder="LastName" className="input w-full max-w-xs ml-3 shadow-inner" required/>
                 </div>
                
                <textarea className="textarea w-full mt-4 max-w-xl shadow-inner" placeholder="Description" required></textarea>
                <br></br>
                <div className='mx-auto max-w-xl text-center'>
                <button className=" btn-wide my-8 text-white btn btn-warning max-w-xl shadow font-bold text-2xl">Send</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Contact