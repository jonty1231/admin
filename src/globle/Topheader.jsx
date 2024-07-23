import React from 'react'
import { Outlet } from 'react-router-dom'

const Topheader = ({handelSlide}) => {
  return (<>
    <section className={` bg-bgcolor py-2 h-[10%] flex items-center justify-between px-5 `} >
      <div className='flex gap-1 md:gap-10'>  <i className="fa-solid fa-user-pen  lg:hidden text-pcolor  text-3xl"> </i> <i className="fa-solid fa-bars text-pcolor p-2.5 bg-black rounded-full" onClick={handelSlide}></i>
        <input type="search" name="" id="" placeholder='Search' className='bg-black text-scolor px-2 py-1 rounded-xl hidden md:block ' /></div> 

        <div className='flex gap-2 md:gap-9  '>
          <div className='flex gap-2 text-scolor items-center group cursor-pointer'>
          <i className="fa-solid fa-envelope p-2.5  bg-black rounded-full text-scolor group-hover:text-pcolor duration-500"></i>
          <p className='hidden lg:block group-hover:text-pcolor duration-500'>Message</p>
          <i className="fa-solid fa-angle-up group-hover:text-pcolor duration-500"></i>
          </div>
          <div className='flex gap-2 text-scolor items-center group cursor-pointer '>
          <i className="fa-solid fa-bell p-2.5 bg-black rounded-full text-scolor group-hover:text-pcolor duration-500"></i>
          <p className='hidden lg:block group-hover:text-pcolor duration-500'>Notification</p>
          <i className="fa-solid fa-angle-up group-hover:text-pcolor duration-500"></i>
          </div>
          <div className='flex gap-2 text-scolor items-center group cursor-pointer'>
        <img src="/user.jpg" alt="" className='rounded-full '/>
          <p className='hidden lg:block group-hover:text-pcolor duration-500'>John Doe</p>
          <i className="fa-solid fa-angle-up group-hover:text-pcolor duration-500"></i>
          </div>
        </div>
    </section>
  <div className='h-[90%] overflow-y-scroll  '> <Outlet /></div> 
    </>
  )
}

export default Topheader