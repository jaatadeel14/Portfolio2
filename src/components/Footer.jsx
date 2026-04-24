import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa6'


const Footer = () => {
  return (
    <>
    <div className='mx-auto max-w-screen-2xl px-4 md:px-20'>
      <div className='h-px w-full bg-gradient-to-r from-transparent via-stone-300/80 to-transparent dark:via-slate-700/80' />
    </div>
   <footer className='mt-4 border-t border-stone-200/60 bg-stone-100/50 py-12 dark:border-slate-800/60 dark:bg-slate-950/80'>
     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className='flex flex-col items-center justify-center gap-8'>
            <p className="font-display text-center text-sm text-stone-500 dark:text-slate-500">Connect</p>
            <div className='flex items-center gap-5'>
                <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer" className='flex h-12 w-12 items-center justify-center rounded-full border border-stone-200/80 bg-white text-stone-500 transition-all hover:scale-105 hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-blue-400'>
                  <FaFacebook className="text-xl"/>
                </a>
                <a href="https://x.com/AdeelJaat1" target='_blank' rel="noopener noreferrer" className='flex h-12 w-12 items-center justify-center rounded-full border border-stone-200/80 bg-white text-stone-500 transition-all hover:scale-105 hover:border-stone-300 hover:text-stone-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-white'>
                  <FaTwitter className="text-xl"/>
                </a>
                <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer" className='flex h-12 w-12 items-center justify-center rounded-full border border-stone-200/80 bg-white text-stone-500 transition-all hover:scale-105 hover:border-pink-200 hover:text-pink-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-pink-400'>
                  <FaInstagram className="text-xl"/>
                </a>
                <a href="https://www.linkedin.com/in/adeel-shabbir-0a2ba9238/" target='_blank' rel="noopener noreferrer" className='flex h-12 w-12 items-center justify-center rounded-full border border-stone-200/80 bg-white text-stone-500 transition-all hover:scale-105 hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-blue-400'>
                  <FaLinkedinIn className="text-xl"/>
                </a>
            </div>
            <div className='flex w-full max-w-md flex-col items-center gap-2 border-t border-stone-200/60 pt-8 text-center dark:border-slate-800/60'>
                <p className='text-sm text-stone-600 dark:text-slate-400'>
                    &copy; 2026 Adeel Shabbir. All rights reserved.
                </p>
                <p className='text-xs text-stone-500 dark:text-slate-500'>Computer engineer · Portfolio</p>
            </div>
        </div>
     </div>
   </footer>
    </>
  )
}

export default Footer
