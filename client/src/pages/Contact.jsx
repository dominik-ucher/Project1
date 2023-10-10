import { Button } from 'flowbite-react'
import React from 'react'

const Contact = () => {


    return(
    <div className='flex flex-wrap items-center justify-center p-20 bg-black text-gray-500'>
        <div className='w-full text-center'>
          <h2 className='sm:text-5xl font-medium title-font text-white mb-4'>Contact Us</h2>
          <div className='w-16 h-1 rounded-full bg-white mx-auto'></div>
          <p className="leading-relaxed text-lg mt-5">Let us know what you are thinking about,</p>
          <p className="leading-relaxed text-lg">and contact us with the form bellow</p>
        </div>
        <form className='gap-5 flex justify-center flex-col w-72'>
        <input type="text" placeholder='Name' className='mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white'/>
        <input type="text" placeholder='email@email.com' className='mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white'/>
        <input type="text" placeholder='About' className='mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white'/>
        <textarea type="textarea" placeholder='Message' className='h-32 mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white'/>
        <Button pill color="gray" className="mt-5">Send</Button>
        </form>
    </div>
    )
}

export default Contact