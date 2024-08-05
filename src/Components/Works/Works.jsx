import React from 'react'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

function Works() {
  return (
    <section id='works' className='w-screen max-w-[60rem] flex flex-col items-center justify-center text-center p-[1rem] min-h-[calc(100vh-4rem)] mx-auto'>
        <h2 className='my-[1rem] text-[3rem] font-semibold'>My Portfolio</h2>
        <span className='font-light text-[1.2rem]'>I take pride in developing frontend applications and making sure my work is pixel perfect. I am excited to bring my skills and experiences to help business achieve their goals and create a strong online prescence</span>
        <div className='flex items-center justify-center w-screen max-w-[65rem] flex-wrap m-[1rem] '>
            <div className='work'>
                <img src={Portfolio1} alt="" />
                <span>Work Title</span>
            </div>

            <div className='work'>
                <img src={Portfolio2} alt="" />
                <span>Work Title</span>
            </div>

            <div className='work'>
                <img src={Portfolio3} alt="" />
                <span>Work Title</span>
            </div>

            <div className='work'>
                <img src={Portfolio4} alt="" />
                <span>Work Title</span>
            </div>

            <div className='work'>
                <img src={Portfolio5} alt="" />
                <span>Work Title</span>
            </div>

            <div className='work'>
                <img src={Portfolio6} alt="" />
                <span>Work Title</span>
            </div>
        </div>
        <button className='py-[.5rem] px-[2.5rem] border-0 bg-white rounded-[2rem] text-[1rem] text-black my-[3rem]'>See More</button>
      
    </section>
  )
}

export default Works
