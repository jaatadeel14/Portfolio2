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
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 py-12 md:px-20 md:py-16 animate-fade-in'>
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Portfolio</p>
        <h1 className="font-display mb-2 text-3xl font-bold tracking-tight text-stone-900 dark:text-white md:text-4xl">Tech stack &amp; work</h1>
        <span className='text-sm font-medium text-stone-500 dark:text-slate-500'>Featured projects &amp; learning focus</span>

        <div className='my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {
               cardItem.map(({id,logo, name})=>(

                <div
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-200/80 bg-white/70 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-glow dark:border-slate-800/80 dark:bg-slate-900/50"
                  key={id}
                >
                       <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                       <div className='relative mb-4 flex justify-center'>
                         <div className="rounded-2xl border border-stone-200/80 bg-stone-50/80 p-3 dark:border-slate-700 dark:bg-slate-800/50">
                           <img className='h-24 w-24 rounded-xl object-contain' src={logo} alt={name} />
                         </div>
                       </div>
                       <div>
                        <div className='mb-2 text-center font-display text-xl font-bold text-stone-900 dark:text-white'>{name}</div>
                        <p className='mb-5 text-center text-sm leading-relaxed text-stone-600 dark:text-slate-400'>Continuously learning and improving skills with hands-on projects and real-world applications.</p>
                       </div>
                       <div className='relative flex flex-wrap justify-center gap-2'>
                        <button type="button" className='rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98]'>Video</button>
                        <button type="button" className='rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-500/20 dark:text-emerald-300 dark:hover:bg-emerald-500/20 active:scale-[0.98]'>Source code</button>
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
