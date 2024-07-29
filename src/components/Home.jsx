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
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1' >
        <span className='text-xl'>Welcome to my Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello, I'm a</h1>
        {/* <span className='text-red-700 font-bold'>Developer</span> */}
        <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm md:text-md text-justify'>
        Motivated Computer Engineering student at Suleyman Demirel University, passionate about innovation and problem-solving. Aspiring to develop a programming career to create impactful tech solutions. Excited to connect with industry professionals and make a difference.</p>
        <br />

        {/* Social media Icon */}
        <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
        <div className='space-y-2'>
            <h1 className='font-bold '>Avaliable on</h1>
            <ul className='flex space-x-5'>
           <li> <a href="https://www.facebook.com/" target='_blank'> <FaSquareFacebook  className='text-2xl cursor-pointer'  /></a></li>
           <li> <a href="https://www.linkedin.com/in/adeel-shabbir-0a2ba9238/" target='_blank'> <FaLinkedin  className='text-2xl cursor-pointer'  /></a></li>
           <li> <a href="https://x.com/AdeelJaat1" target='_blank'> <FaSquareXTwitter  className='text-2xl cursor-pointer'  /></a></li>
           <li> <a href="https://github.com/jaatadeel14" target='_blank'> <FaSquareGithub  className='text-2xl cursor-pointer'  /></a></li>

            </ul>
        </div>
         <div className='space-y-2'>

         <h1 className='font-bold'>Currently working on</h1>
            <div className='flex space-x-5'>
           <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <FaLinkedin className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>

            </div>

         </div>
        </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
        <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div>

        </div>
      </div>
      <hr />
      </>
  )
}

export default Home