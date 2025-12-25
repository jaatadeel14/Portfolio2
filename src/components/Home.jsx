import React from 'react'
import pic from "../../public/photo.avif"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";



const Home = () => {
  return (
      <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 animate-fade-in'>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1 animate-slide-up' >
        <span className='text-xl text-gray-600 dark:text-gray-400 font-medium'>Welcome to my Portfolio</span>
        <div className='flex flex-wrap space-x-1 text-2xl md:text-4xl'>
        <h1 className='dark:text-white'>Hello, I'm a</h1>
        <ReactTyped
          className='text-red-700 dark:text-red-400 font-bold'
          strings={["Computer Engineer","Developer","Programmer","Problem Solver"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <p className='text-sm md:text-md text-justify text-gray-700 dark:text-gray-300 leading-relaxed'>
        Motivated Computer Engineering graduate from Suleyman Demirel University, passionate about innovation and problem-solving. With a Bachelor's degree in Computer Engineering (Graduated 2025) and international experience through the Erasmus+ program, I'm dedicated to creating impactful tech solutions. Excited to connect with industry professionals and make a difference in the technology field.</p>

        {/* Social media Icon */}
        <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
        <div className='space-y-2'>
            <h1 className='font-bold dark:text-white'>Available on</h1>
            <ul className='flex space-x-5'>
           <li> <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"> <FaSquareFacebook  className='text-2xl cursor-pointer text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform duration-200'  /></a></li>
           <li> <a href="https://www.linkedin.com/in/adeel-shabbir-0a2ba9238/" target='_blank' rel="noopener noreferrer"> <FaLinkedin  className='text-2xl cursor-pointer text-blue-700 dark:text-blue-400 hover:scale-110 transition-transform duration-200'  /></a></li>
           <li> <a href="https://x.com/AdeelJaat1" target='_blank' rel="noopener noreferrer"> <FaSquareXTwitter  className='text-2xl cursor-pointer text-gray-900 dark:text-gray-100 hover:scale-110 transition-transform duration-200'  /></a></li>
           <li> <a href="https://github.com/jaatadeel14" target='_blank' rel="noopener noreferrer"> <FaSquareGithub  className='text-2xl cursor-pointer text-gray-900 dark:text-gray-100 hover:scale-110 transition-transform duration-200'  /></a></li>

            </ul>
        </div>
         <div className='space-y-2'>

         <h1 className='font-bold dark:text-white'>Currently working on</h1>
            <div className='flex space-x-5'>
           <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-800 transition-all'/>
           <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-800 transition-all'/>
           <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-800 transition-all text-blue-500'/>
           <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-800 transition-all text-green-600 dark:text-green-400'/>

            </div>

         </div>
        </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 animate-scale-in'>
        <img src={pic} className='rounded-full md:w-[450px] md:h-[450px] shadow-2xl hover:shadow-green-500/50 transition-shadow duration-300' alt="Profile" />
        </div>

        </div>
      </div>
      <hr className='border-gray-300 dark:border-gray-700 my-8' />
      </>
  )
}

export default Home