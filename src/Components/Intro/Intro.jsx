import React from 'react'
import hireMe from '../../assets/hireme.png'
import { Link } from 'react-scroll'
//import bg and hire me button 

function Intro() {
  return (
    <section id='intro' className='h-[calc(100vh-4rem)] w-screen max-w-[75rem] mx-auto overflow-hidden relative'>
        <div className="h-screen w-screen p-[2rem] text-[3rem] font-bold flex flex-col justify-center">
          <span className='text-[1.75rem] font-thin'>Hello,</span>
          <span className=''>I'm <span className='text-rose-600'>Oluwakoya Isaac</span> <br />Frontend Developer</span>
          <p className='text-base font-thin'>I am a skilled Frontend Developer with experience in creating<br/> visually apealing and use friendly websites</p>
          <Link><button className="bg-white my-[1rem] py-[0.75rem] px-[2rem] border-0 rounded-[2rem] flex items-center justify-between"><img className='object-cover mx-[0.25] h-[1rem]' src={hireMe}alt="hire me button" /><span className=' text-black text-base pl-[.4rem]' >Hire Me</span></button></Link>
        </div>
        <img className='absolute z-[-1] top-[-4rem] right-0 object-cover h-screen sm:right-[-20vw]' src="" alt="Profile" />
    </section>

  )
}

export default Intro
