import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/GUI.PNG';
import './navbar.css'; 

const Navbar = () => {
    // use the useState hook by saying  const,  toggleMenu  is a variable gonna show the mobile menu or not, 
    // setToggleMenu  is a function that's gonna allow us to change that variable. 
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className = 'gui_navbar'>
            <div className = 'gui_navbar-links'>
                <div className = 'gui_navbar-links_GUIlogo'>
                    <img src={logo} alt='GUIlogo'/>
                </div>
                <div className='gui_navbar-links_container'>
                    <p><a href='#home'>Home of PandaTech</a></p>
                    <p><a href='#pandagui'>PandaGUI</a></p>
                    <p><a href='#pandahci'>PandaHCI</a></p>
                    <p><a href='#works'>Our Works</a></p>
                    <p><a href='#events'>Our Events</a></p>
                </div>
            </div>
            <div className='gui_navbar-sign'>
                <p>Log in</p>
                <button type='button'>Register</button>
            </div>
            <div className='gui_navbar-menu'>
                {toggleMenu
                 ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                 : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='gui_navbar-menu_container scale-up-center'>
                        <div className='gui_navbar-menu_container-links'>
                            <p><a href='#home'>Home of PandaTech</a></p>
                            <p><a href='#pandagui'>PandaGUI</a></p>
                            <p><a href='#pandahci'>PandaHCI</a></p>
                            <p><a href='#works'>Our Works</a></p>
                            <p><a href='#events'>Our Events</a></p>
                        </div>
                        <div className='gui_navbar-menu_container-links-sign'>
                            <p>Log in</p>
                            <button type='button'>Register</button>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}
// &&  only if this variable is true, then render what is coming. 

export default Navbar