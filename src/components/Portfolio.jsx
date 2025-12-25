import React from 'react'
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
const Portfolio = () => {
    const cardItem = [
        {
          id: 1,
          logo: mongoDB,
          name: "MongoDB",
        },
        {
          id: 2,
          logo: express,
          name: "Express",
        },
        {
          id: 3,
          logo: reactjs,
          name: "ReactJS",
        },
        {
          id: 4,
          logo: nodejs,
          name: "NodeJS",
        },
        {
          id: 5,
          logo: python,
          name: "Python",
        },
        {
          id: 6,
          logo: java,
          name: "Java",
        },
      ];
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 animate-fade-in'>
      
      <div>
        <h1 className="text-3xl font-bold mb-5 dark:text-white">Portfolio</h1>
        <span className='underline font-semibold text-gray-700 dark:text-gray-300'>Featured Projects</span>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
            {
               cardItem.map(({id,logo, name})=>(

                <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 cursor-pointer hover:scale-105 duration-300 bg-white dark:bg-gray-800 transition-all hover:shadow-xl" key={id}>
                       <div className='flex justify-center mb-4'>
                         <img className='w-[120px] h-[120px] p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700' src={logo} alt={name} />
                       </div>
                       <div>
                        <div className='font-bold text-xl mb-2 text-center dark:text-white'>{name}</div>
                        <p className='text-gray-700 dark:text-gray-300 text-center text-sm mb-4'>Continuously learning and improving skills with hands-on projects and real-world applications.</p>
                       </div>
                       <div className='flex justify-center space-x-3'>
                        <button  className='bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-200' >Video</button>
                        <button className='bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-200' >Source Code</button>
                       </div>
                </div>
               ))

            }
        </div>
      </div> 
        </div>
  )
}

export default Portfolio