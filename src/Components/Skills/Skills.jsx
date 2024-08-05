import React from 'react'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function Skills() {
  return (
    <section id='skills' className='overflow-hidden w-screen max-w-[65rem] flex flex-col items-center justify-center text-center mx-auto'>
        <span className="text-[3rem] font-semibold py-[3rem] ">What I do</span>
        <span className='font-normal text-[1.2rem] max-w-[50rem] px-[2rem]'>I am a skilled and passioante web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding for frontend development and a keen eye for detail.</span>
        <div className='m-[1.5rem] w-screen max-w-[80%] text-left'>
            <div className='skillBar'>
                <img className='skillBarImg' src={UIDesign} alt=" UI Design" />
                <div className='skillBarText'>
                    <h2>UI/UX</h2>
                    <p>This is a Demo Text</p>
                </div>
            </div>

            <div className='skillBar'>
                <img className='skillBarImg' src={WebDesign} alt="Web Design" />
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>This is a Demo text</p>
                </div>
            </div>

            <div className='skillBar'>
                <img className='skillBarImg' src={AppDesign} alt="App Design" />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Skills
