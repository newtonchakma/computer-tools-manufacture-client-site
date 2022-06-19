import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div id='contact' className='mb-5 pb-5 h-[520px]'>
            <div className='my-9 mt-5 pt-5 font-bold text-center'>
                <h1 className='text-white  mt-5 text-4xl'>Have Any Question? <span className='text-secondary'>Contact Us</span></h1>
            </div>
            <div className='w-[750] mt-4 pt-5'>
                <form className='mx-auto w-full'>
                <input type="email" placeholder="Email" class="input w-full max-w-xl shadow-inner" />
                <div class="flex max-w-xl mt-4 mx-auto">
                   <input type="text" placeholder="FastName" class="input w-full max-w-xs shadow-inner" />
                   <input type="text" placeholder="LastName" class="input w-full max-w-xs ml-3 shadow-inner" />
                 </div>
                
                <textarea class="textarea w-full mt-4 max-w-xl shadow-inner" placeholder="Description"></textarea>
                <br></br>
                <button class=" btn-wide my-8 text-white btn btn-warning max-w-xl shadow font-bold text-2xl">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact