import axios from 'axios'     // learn coding 
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

const Contact = () => {
  const  {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) =>{
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }
    try {
     await axios.post("https://getform.io/f/azylqyyb",userInfo)
     toast.success("Your message has been sent")
    } catch (error) {
      console.log(error)
      toast.error("Something went Wrong")
    }
  }
  return (
   <>
   <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 py-12 md:px-20 md:py-20 animate-fade-in'>
    <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400'>Contact</p>
    <h1 className='font-display mb-3 text-3xl font-bold tracking-tight text-stone-900 dark:text-white md:text-4xl'>Let&apos;s talk</h1>
    <span className='text-stone-600 dark:text-slate-400'>Fill out the form below and I&apos;ll get back to you.</span>
    <div className='mt-8 flex flex-col items-center'>
        <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-md rounded-2xl border border-stone-200/80 bg-white/80 px-6 py-8 shadow-card backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60'>
            <h2 className='font-display mb-6 text-lg font-bold text-stone-900 dark:text-white'>Send a message</h2>
            <div className='flex flex-col gap-1.5 mb-4'>
            <label className="text-sm font-medium text-stone-700 dark:text-slate-300" htmlFor="name">Full name</label>
              <input
                {...register("name", { required: true })}
                className="rounded-xl border border-stone-200/90 bg-stone-50/80 px-3.5 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
              />
               {errors.name && <span className="text-sm text-rose-500">This field is required</span>}
            </div>
            <div className='flex flex-col gap-1.5 mb-4'>
            <label className="text-sm font-medium text-stone-700 dark:text-slate-300" htmlFor="email">Email</label>
              <input
                {...register("email", { required: true })}
                className="rounded-xl border border-stone-200/90 bg-stone-50/80 px-3.5 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500"
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
               {errors.email && <span className="text-sm text-rose-500">This field is required</span>}
            </div>
            <div className='flex flex-col gap-1.5 mb-6'>
            <label className="text-sm font-medium text-stone-700 dark:text-slate-300" htmlFor="message">Message</label>

              <textarea
                {...register("message", { required: true })}
                className="resize-none rounded-xl border border-stone-200/90 bg-stone-50/80 px-3.5 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500"
                id="message"
                name="message"
                rows="4"
                placeholder="What would you like to share?"
              />
               {errors.message && <span className="text-sm text-rose-500">This field is required</span>}
            </div>
            <button type='submit' className='w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-2.5 font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99] dark:from-emerald-500 dark:to-teal-500'>Send message</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default Contact
