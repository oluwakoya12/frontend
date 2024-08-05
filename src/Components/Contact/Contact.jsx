import React from 'react'
import Facebook from '../../assets/facebook-icon.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'

function Contact() {
  return (
    <section id='contact' className='w-screen max-w-[65rem] flex flex-col items-center justify-center text-center p-[1rem] min-h-[calc(100vh-4rem)] mx-auto'>
        <div>
            <h1 className='my-[1rem] text-[3rem] font-semibold'>Contact Me</h1>
            <span className='p-[1rem] text-[1.2rem] font-light '>Please fill out form below to discuss any work oppurtunities</span>
            <form action="" className='m-[1rem] flex flex-col items-center justify-center w-[90vw] max-w-[60rem] '>
                <input className='text-[1.2rem] w-full max-w-[40rem] m-[.5rem] py-[0.5rem] px-[1rem] text-white border-0 rounded-[.5rem] bg-secondbg' type="text" placeholder='Your Name'/>
                <input className='text-[1.2rem] w-full max-w-[40rem] m-[.5rem] py-[0.5rem] px-[1rem] text-white border-0 rounded-[.5rem] bg-secondbg' type="email" placeholder='Your Email'/>
                <textarea className='text-[1.2rem] w-full max-w-[40rem] m-[.5rem] py-[0.5rem] px-[1rem] text-white border-0 rounded-[.5rem] bg-secondbg' name="message" placeholder='Your Message' rows='5'></textarea>
                <button value='send' type='submit' className='text-black bg-white rounded-[.5rem] py-[0.75rem] px-[3.5rem] m-[2rem] border-0'>Submit</button>
                <div className='flex flex-wrap'>
                    <img className='object-cover w-[3rem] h-[3rem] mx-[.75rem] cursor-pointer' src={Facebook} alt="" />
                    <img className='object-cover w-[3rem] h-[3rem] mx-[.75rem] cursor-pointer' src={Twitter} alt="" />
                    <img className='object-cover w-[3rem] h-[3rem] mx-[.75rem] cursor-pointer' src={Instagram} alt="" />
                    
                </div>
            </form>
        </div>
      
    </section>
  )
}

export default Contact
