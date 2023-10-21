import React from 'react';

const Navbar = () => {
    
    return (
        <div className='border-b-2'>
        {/* Summer sale */}

        <div className='bg-black text-white text-center'>
          <p className='text-sm'>Summer Sale for All Swmming Suits And Free Express Delivery - OFF 50%! <span><u><a href="#">SHOP NOW</a></u></span></p>
        </div>

        {/* Navbar */}

        <div className='container grid grid-cols-3 justify-between ps-20 py-2' id='logo'>
         
          <div>
            <a href='/' className='items-center font-bold text-2xl'>Best<span className='text-slate-400'>Buy</span></a>
          </div>

          <div className='items-center grid grid-cols-4 px-5 font-semibold' id='pages'>
            <a href="/" className=' hover:text-red-700 '>Home</a>
            <a href="#" className=' hover:text-red-700 '>Contact</a>
            <a href="#" className=' hover:text-red-700 '>About</a>
            <a href="/signin" className=' hover:text-red-700 '>Sign In</a>
          </div>

          <div className='items-center flex flex-cols-3 justify-end'>
            <div>
              <input className='bg-slate-100 py-1 px-4 text-sm w-auto border-2xl' placeholder='What are you looking for?'  />
            </div>
            <div className='pt-1 px-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
            </div> 
            <div className='pt-1 px-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
            </div>  
            <div className='pt-1 px-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </div>  
          </div>    
        </div>  
      </div>

    );
};

export default Navbar;



