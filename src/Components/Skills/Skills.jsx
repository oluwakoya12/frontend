import React, {useEffect} from 'react'
import { client, urlFor } from '../../client'
import { useState } from 'react'

function Skills() {

    const [skillset, setSkillSet] = useState(null)

    useEffect(() => {
        const query = "*[_type == 'skills']"
        client.fetch(query).then(data => setSkillSet(data)).catch((error) => {
            console.error("Error fetching data:", error);
        })   
    }, [])



  return (
    <section id='skills' className='overflow-hidden w-screen max-w-[65rem] flex flex-col items-center justify-center text-center mx-auto'>
        <span className="text-[3rem] font-semibold py-[3rem] ">What I do</span>
        <span className='font-normal text-[1.2rem] max-w-[50rem] px-[2rem]'>I am a skilled and passionate web designer with a proven track record in crafting visually appealing and user-friendly websites. I possess a strong understanding of frontend development and a keen eye for detail</span>
        <div className='m-[1.5rem] w-screen max-w-[80%] text-left'>
            {skillset && skillset.map((item) => {
                return(
                    <div key={item.skill} className='skillBar'>
                        <img className='skillBarImg' src={urlFor(item.image)} alt="" />
                        <div className='skillBarText'>
                            <h2>{item.skill}</h2>
                    
                        </div>
                    </div>
                )
            })}
          
        </div>
      
    </section>
  )
}

export default Skills
