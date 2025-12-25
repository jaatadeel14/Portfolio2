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
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-300'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                        <h1 className='font-semibold text-xl cursor-pointer dark:text-white'>Adee<span className='text-green-500 dark:text-green-400 tezt-2xl'>l</span>
                            <p className='text-sm dark:text-gray-300'>Computer Engineer</p>
                        </h1>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItems.map(({id,text})=>(
                                    <li className='hover:scale-105 duration-200 cursor-pointer dark:text-white text-gray-700' key={id}>
                                       <Link to={text}
                                       smooth={true}
                                       duration={500}
                                       offset={-70}
                                       activeClass='active'
                                       className='hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200'>
                                       {text}
                                       </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <button
                            onClick={toggleDarkMode}
                            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 active:scale-95'
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <MdLightMode className='text-2xl text-yellow-400 transition-transform duration-300 rotate-0' />
                            ) : (
                                <MdDarkMode className='text-2xl text-gray-700 transition-transform duration-300 rotate-0' />
                            )}
                        </button>
                        <div onClick={() => setMenu(!menu)} className='md:hidden dark:text-white'>{menu ? <IoClose size={24} /> : <AiOutlineMenu size={24} />} </div>
                    </div>
                </div>

                {/*for the medium devices */}

                {
                    menu && (

                        <div className='bg-white dark:bg-gray-900 transition-colors duration-300'>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-xl'>
                            {
                                navItems.map(({id,text})=>(
                                    <li className='hover:scale-105 duration-200 font-semibold cursor-pointer dark:text-white text-gray-700' key={id}><Link onClick={() => setMenu(!menu)} to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    className='hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200'>
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