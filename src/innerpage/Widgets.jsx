import React from 'react'
import CalenderSection from '../components/CalenderSection'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Widgets = () => {
  return (
    <div className='bg-black '  > 
        <CalenderSection  className="w-full"/>

       <div className=' flex  p-5 gap-4'> 
    
        
     
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.07953650141!2d77.65917002395751!3d30.659888739152382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f38b228f58989%3A0x76818af9e4eddb40!2sKaffota%2C%20Himachal%20Pradesh%20173027!5e0!3m2!1sen!2sin!4v1721649052259!5m2!1sen!2sin" width="550" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       </div>
      <Footer />
    </div>
  )
}

export default Widgets