import React, { useState, useEffect } from 'react'
import pic from "../../public/photo.avif"
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {Link} from "react-scroll"
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experiance"
        },
        {
            id:5,
            text:"Contact"
        },
        
    ]

    return (

        <>
            <div className='fixed top-0 left-0 right-0 z-50 h-16 border-b border-stone-200/80 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-slate-950/75'>
                <div className='max-w-screen-2xl container mx-auto flex h-16 items-center justify-between px-4 md:px-20'>
                    <div className='flex items-center gap-3'>
                        <div className='ring-2 ring-emerald-500/30 ring-offset-2 ring-offset-stone-50 dark:ring-emerald-400/20 dark:ring-offset-slate-950 rounded-full'>
                            <img src={pic} className='h-11 w-11 rounded-full object-cover' alt="" />
                        </div>
                        <div>
                            <h1 className='font-display text-lg font-bold tracking-tight text-stone-900 dark:text-white'>Adee<span className='bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent'>l</span></h1>
                            <p className='text-xs text-stone-500 dark:text-slate-400'>Computer Engineer</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 md:gap-5'>
                        <ul className='hidden md:flex md:items-center md:gap-7'>
                            {
                                navItems.map(({id,text})=>(
                                    <li className='cursor-pointer text-sm font-medium text-stone-600 dark:text-slate-300' key={id}>
                                       <Link to={text}
                                       smooth={true}
                                       duration={500}
                                       offset={-70}
                                       activeClass='active'
                                       className='hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200'>
                                       {text}
                                       </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <button
                            onClick={toggleDarkMode}
                            className='rounded-full border border-stone-200/80 p-2 text-stone-600 hover:bg-stone-100/80 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/80 transition-all duration-200 active:scale-95'
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <MdLightMode className='text-xl text-amber-400' />
                            ) : (
                                <MdDarkMode className='text-xl' />
                            )}
                        </button>
                        <div onClick={() => setMenu(!menu)} className='cursor-pointer p-1 text-stone-700 dark:text-slate-200 md:hidden'>{menu ? <IoClose size={24} /> : <AiOutlineMenu size={24} />} </div>
                    </div>
                </div>

                {/*for the medium devices */}

                {
                    menu && (

                        <div className='fixed inset-0 top-16 z-40 border-t border-stone-200/80 bg-stone-50/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/95 md:hidden'>
                            <ul className='flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 text-lg font-medium'>
                            {
                                navItems.map(({id,text})=>(
                                    <li className='cursor-pointer text-stone-800 dark:text-slate-100' key={id}><Link onClick={() => setMenu(!menu)} to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    className='hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200'>
                                    {text}
                                    </Link></li>
                                ))
                            }
                            </ul>
                        </div>
                    )
                }


            </div>
        </>
    )
}

export default Navbar