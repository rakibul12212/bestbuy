import React from 'react';

const SignupPage = () => {
    return (
        <div className='flex py-10'>
            <div>
               <img src="https://i.ibb.co/71LCp1x/Side-Image.png" alt="" />
            </div>
            <div className='px-20 py-28 '>
                <p className='text-4xl'>Create an account</p>
                <p className='text-normal pt-5'>Enter your details below</p>
                <input type="text" placeholder='Name' className='pt-5 pr-28 border-b-2 border-gray-500 '/><br />
                <input type="email" placeholder='Email or Phone Number' className='pt-5 pr-28 border-b-2 border-gray-500 '/><br />
                <input type="password" placeholder='Password' className='pt-5 pr-28 border-b-2 border-gray-500'/>
                <div className='pt-5  text-center'>
                    <button className='bg-red-600 hover:bg-red-700 px-24  py-2 rounded text-white'>Create Account</button>
                </div>
                <div className='pt-5 text-normal text-center'>
                   
                    <button className=' px-14  py-2 rounded text-gray-600 hover:bg-red-600 hover:text-white border-2 flex gap-3'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" className='w-6 h-6'/>Sign Up With Google</button>
                </div>
                 <div className='pt-5'>
                   <p className='text-center'>already have an account? <a href="/signin" className='hover:text-red-600'>Sign in</a></p>
                </div>
               
            </div>
       </div>
    );
};

export default SignupPage;