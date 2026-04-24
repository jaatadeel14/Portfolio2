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
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 animate-fade-in pt-8 pb-4 md:pt-12 md:pb-8'>
        <div className='my-6 flex flex-col gap-10 md:my-12 md:flex-row md:items-center md:gap-8'>
        <div className='order-2 space-y-5 md:order-1 md:mt-8 md:w-1/2 md:max-w-xl animate-slide-up' >
        <span className='inline-block rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300'>Welcome to my portfolio</span>
        <div className='flex flex-wrap items-baseline gap-x-2 gap-y-1 text-3xl font-display font-bold tracking-tight text-stone-900 dark:text-white md:text-4xl lg:text-5xl'>
        <h1>Hello, I&apos;m a</h1>
        <ReactTyped
          className='bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent'
          strings={["Computer Engineer","Developer","Programmer","Problem Solver"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <p className='max-w-xl text-justify text-sm leading-relaxed text-stone-600 dark:text-slate-400 md:text-base'>
        Motivated Computer Engineering graduate from Suleyman Demirel University, passionate about innovation and problem-solving. With a Bachelor&apos;s degree in Computer Engineering (Graduated 2025) and international experience through the Erasmus+ program, I&apos;m dedicated to creating impactful tech solutions. Excited to connect with industry professionals and make a difference in the technology field.</p>

        <div className='flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-6'>
        <div className='space-y-3'>
            <h2 className='font-display text-sm font-bold uppercase tracking-widest text-stone-500 dark:text-slate-500'>Available on</h2>
            <ul className='flex flex-wrap gap-4'>
           <li> <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer" className='flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200/80 bg-white text-blue-600 shadow-sm transition-all hover:scale-105 hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50 dark:text-blue-400'> <FaSquareFacebook className='text-xl'  /></a></li>
           <li> <a href="https://www.linkedin.com/in/adeel-shabbir-0a2ba9238/" target='_blank' rel="noopener noreferrer" className='flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200/80 bg-white text-blue-700 shadow-sm transition-all hover:scale-105 hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50 dark:text-blue-400'> <FaLinkedin className='text-xl'  /></a></li>
           <li> <a href="https://x.com/AdeelJaat1" target='_blank' rel="noopener noreferrer" className='flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200/80 bg-white text-stone-800 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100'> <FaSquareXTwitter className='text-xl'  /></a></li>
           <li> <a href="https://github.com/jaatadeel14" target='_blank' rel="noopener noreferrer" className='flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200/80 bg-white text-stone-800 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100'> <FaSquareGithub className='text-xl'  /></a></li>

            </ul>
        </div>
         <div className='space-y-3'>

         <h2 className='font-display text-sm font-bold uppercase tracking-widest text-stone-500 dark:text-slate-500'>Currently on</h2>
            <div className='flex flex-wrap gap-3'>
           <span className='inline-flex items-center justify-center rounded-2xl border border-stone-200/80 bg-white p-2.5 text-xl shadow-sm dark:border-slate-700 dark:bg-slate-900/50'><SiMongodb className='hover:scale-110 duration-200'/></span>
           <span className='inline-flex items-center justify-center rounded-2xl border border-stone-200/80 bg-white p-2.5 text-xl shadow-sm dark:border-slate-700 dark:bg-slate-900/50'><SiExpress className='hover:scale-110 duration-200'/></span>
           <span className='inline-flex items-center justify-center rounded-2xl border border-stone-200/80 bg-white p-2.5 text-xl text-sky-500 shadow-sm dark:border-slate-700 dark:bg-slate-900/50'><FaReact className='hover:scale-110 duration-200'/></span>
           <span className='inline-flex items-center justify-center rounded-2xl border border-stone-200/80 bg-white p-2.5 text-xl text-emerald-600 dark:text-emerald-400 shadow-sm dark:border-slate-700 dark:bg-slate-900/50'><FaNodeJs className='hover:scale-110 duration-200'/></span>

            </div>

         </div>
        </div>
        </div>
        <div className='order-1 flex justify-center md:order-2 md:mt-6 md:w-1/2 md:justify-end animate-scale-in'>
        <div className='relative'>
          <div className='absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-400/40 via-teal-400/30 to-cyan-400/40 opacity-80 blur-2xl dark:opacity-50' />
          <img src={pic} className='relative h-64 w-64 rounded-full border-2 border-white/80 object-cover shadow-glow dark:border-slate-800/80 md:h-[min(28rem,42vw)] md:w-[min(28rem,42vw)] md:max-h-[450px] md:max-w-[450px]' alt="Profile" />
        </div>
        </div>

        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-20'>
        <div className='h-px w-full bg-gradient-to-r from-transparent via-stone-300/80 to-transparent dark:via-slate-700/80' />
      </div>
      </>
  )
}

export default Home
