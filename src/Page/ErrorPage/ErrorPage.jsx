import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <p className='text-7xl  text-center pt-20'>404 not found</p>
            <p className='text-center pt-2 text-sm'>your visit page not found.you may go home page</p>
            <div className=' flex justify-center p-10'>
            <button className='bg-red-600 px-5 py-2 text-white rounded '><a href="/">back to home</a></button>
            </div>
        </div>
    );
};

export default ErrorPage;