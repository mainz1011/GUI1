import React from 'react';
import './header.css'; 
import people from '../../assets/people.png';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='gui_header section_padding' id='home'>
            <div className='gui_header-content'>
                <h1 className='gradient_text'>Explore PandaTech!</h1>
                <p>PandaTech combines the technologies of PandaGUI and PandaHCI. Try our Demo and enjoy!</p>
                <div className='gui_header-content-input'>
                    <input type='email' placeholder='Enter your email address' />
                    <button type='button'>Try Demo</button>
                </div>
                <div className='gui_header-content-people'>
                    <img src={people} alt="people who tried PandaTech" />
                    <p>600 users have tried it.</p>
                </div>
            </div>
            <div className='gui_header-image'>
                <img src={logo} alt="PandaTech logo" />
            </div>
        </div>
    )
}

export default Header