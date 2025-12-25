import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa6'


const Footer = () => {
  return (
    <>
    <hr className='border-gray-300 dark:border-gray-700' />
   <footer className='py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-6'>
                <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer" className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform'>
                  <FaFacebook size={24}/>
                </a>
                <a href="https://x.com/AdeelJaat1" target='_blank' rel="noopener noreferrer" className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:scale-110 transform'>
                  <FaTwitter size={24}/>
                </a>
                <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer" className='text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 hover:scale-110 transform'>
                  <FaInstagram size={24}/>
                </a>
                <a href="https://www.linkedin.com/in/adeel-shabbir-0a2ba9238/" target='_blank' rel="noopener noreferrer" className='text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform'>
                  <FaLinkedinIn size={24}/>
                </a>
            </div>
            <div className='mt-8 border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col items-center space-y-2'>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                    &copy; 2025 Adeel Shabbir. All rights reserved.
                </p>
                <p className='text-sm text-gray-500 dark:text-gray-500'>Computer Engineer | Portfolio</p>
            </div>
        </div>
     </div>
   </footer>
    </>
  )
}

export default Footer