
import React, { useState } from 'react'
import {Link} from 'react-scroll'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"

export const Navbar = () => {
    const [ showMediaIcons, setShowMediaIcons] = useState(false)
    return (
    <>
     <nav className='main-nav'>
         <div className='logo'>
        <h2>
            <span>A</span>rpit
            <span>S</span>hrivastava
        </h2>
         </div>
         <div className={showMediaIcons ? "menu-link mobile-menu-link":"menu-link"}>
             <ul>
                 <li>
                     <a href='#'><Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Home</Link></a>
                 </li>
                 <li>
                     <a href='#'>
                     <Link
    activeClass="active"
    to="skills"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Skills</Link> </a>
                 </li>
                 <li>
                     <a href='#'>
                     <Link
    activeClass="active"
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Project</Link> </a>
                 </li>
                 <li>
                     <a href='#'>
                     <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Contact</Link> </a>
                 </li>
                 <li>
                     <a href='https://medium.com/@arpitshrivastava764'>Read my blogs</a>
                 </li>
             </ul>
         </div>
         <div className='resume'>
             <ul className='resume-desktop'> 
                 <li>
                    <a className="homeBtns" href='Arpit_Shrivastava_Resume.pdf' download='Arpit_Shrivastava_Resume'> View Resume </a>
                 </li>
             </ul>
             <div className='hamburger-menu'>
                 <a href='#' onClick = {()=>setShowMediaIcons(!showMediaIcons)}>
                     <GiHamburgerMenu />
                     </a>
             </div>
         </div>
     </nav> 
    </> 
    )
}
export default Navbar