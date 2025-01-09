import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mv-8 md:mb-0'>
            <img src={assets.logo_dark} alt="Logo" />
            <p className='text-gray-400 mt-4' >Building dreams with precision and trust. Your reliable partner in real estate, delivering quality homes and commercial spaces, exceeding expectations with every project.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About Us</a>
                <a href="#Contact" className='hover:text-white'>Contact Us</a>
                <a href="#" className='hover:text-white'>Privacy Policy</a>

            </ul>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4'>Subscribe To Our News Letter </h3>
        <p className='text-gray-400 mb-4 max-w-80'>The Latest News, Articles and Resources Send To Your Inbox Weekly</p>
        <div className='flex gap-2'>
            <input type="email" placeholder='Your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray700 focus:outline-none w-full md:w-auto' />
            <button className='py-2 px-4 rounded bg-blue-500 text-white '>Subscribe</button>
        </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500 flex flex-col md:flex-row justify-between items-center md:items-start">
  <div className="mb-4 md:mb-0">
    <p>&copy; 2024 Gowtham G. All rights reserved.</p>
  </div>
  <div className="flex gap-4">
    <p className="hidden md:block">Connect With Me...</p>
    <a href="https://github.com/gowtham-ggg" target="_blank" className="text-gray-500 hover:text-white-700">
      <i className="fa-brands fa-github text-2xl"></i>
    </a>
    <a href="https://www.linkedin.com/in/gowtham-g-a8a945220/" target="_blank" className="text-gray-500 hover:text-blue-700">
      <i className="fa-brands fa-linkedin text-2xl"></i>
    </a>
  </div>
</div>

    </div>
  )
}

export default Footer
