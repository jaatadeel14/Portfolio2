import axios from 'axios'
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
   <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 animate-fade-in'>
    <h1 className='text-3xl font-bold mb-4 dark:text-white'>Contact Me</h1>
    <span className='text-gray-700 dark:text-gray-300'>Please fill out the form below to contact me </span>
    <div className='flex flex-col items-center justify-center mt-5'>
        <form 
        onSubmit={handleSubmit(onSubmit)}  
        className='bg-slate-200 dark:bg-gray-800 w-full max-w-md px-8 py-6 rounded-xl shadow-lg'>
            <h1 className='text-xl font-semibold mb-4 dark:text-white'>Send Your Message </h1>
            <div className='flex flex-col mb-4'>
            <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border border-gray-300 dark:border-gray-600 py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
               {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
            <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border border-gray-300 dark:border-gray-600 py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
               {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
            <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">Message</label>

              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border border-gray-300 dark:border-gray-600 py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all resize-none"
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message"
              />
               {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>
            <button type='submit' className='w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold rounded-xl px-4 py-2 transition-colors duration-300 transform hover:scale-105 active:scale-95'>Send Message</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default Contact