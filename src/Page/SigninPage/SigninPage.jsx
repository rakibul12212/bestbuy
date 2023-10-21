import React from 'react';

const SigninPage = () => {
    return (
       <div className='flex py-10'>
            <div>
               <img src="https://i.ibb.co/71LCp1x/Side-Image.png" alt="" />
            </div>
            <div className='px-20 py-40 '>
                <p><span className='text-4xl'>Log In to  </span><span className=' font-bold text-4xl'>Best<span className='text-slate-400'>Buy</span></span></p>
                <p className='text-normal pt-5'>Enter your details below</p>
                <input type="email" placeholder='Email or Phone Number' className='pt-5 pr-28 border-b-2 border-gray-500 '/><br />
                <input type="password" placeholder='Password' className='pt-5 pr-28 border-b-2 border-gray-500'/>
                <div className='pt-5 flex justify-between items-center'>
                    <button className='bg-red-600 hover:bg-red-700 px-7 py-2 rounded text-white'>Log In</button>
                    <p className='text-red-600'>Forget password ?</p>
                </div>
                <div className='pt-5'>
                   <p className='text-center'>don't have an account? <a href="/signup" className='hover:text-red-600'>Sign Up</a></p>
                </div>
            </div>
       </div>
    );
};

export default SigninPage;