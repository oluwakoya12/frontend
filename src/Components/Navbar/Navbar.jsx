import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import Menu from '../../assets/menu-white.png'

import {Link} from 'react-scroll'

function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

 
  return (
    <nav className='bg-mybg'>
        <img src={logo} alt="Logo" className='object-cover h-[3rem] w-[4rem] ' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth', offset: -100})
        }} className="sm:border-0 bg-white text-black sm:items-center sm:justify-center sm:px-[1rem] sm:rounded-[2rem] sm:flex hidden"> <img src={contact} alt="" className="object-cover h-[1rem] w-[1rem] m-[1rem] " />Contact Me</button>

        <img src={Menu} alt="Logo" className='sm:hidden object-cover h-[3rem] w-[4rem] flex ' onClick={() => setShowMenu(!showMenu)} />
        <div className="p-[.5rem] h-screen min-w-[15rem] bg-secondbg rounded-lg absolute top-[4rem] right-[2rem] z-[2] flex flex-col " style={{display: showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Contact Me</Link>
        </div>
      
    </nav>
  )
}

export default Navbar
