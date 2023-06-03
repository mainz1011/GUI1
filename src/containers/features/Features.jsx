import React from 'react';
import { Feature } from '../../components';
import mission from '../../assets/mission.jpg';
import './features.css'; 


/* create an array */
const featuresData = [
    {
        title: 'Our Vision',
        text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.',
    }, 
    {
        title: 'Our Strengths',
        text: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    }, 
    {
        title: 'Our Accomplishments',
        text: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    }, 
    {
        title: 'Our Team',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    }
];

const Features = () => (
    <div className='gui_features section_padding' id='features'>
        <div className='gui_features-heading'>
            <h1 className='gradient_text'>The mission of PandaTech is creating graphical &amp; interactive technologies that benefit human beings.</h1>
            <div className='gui_features-button'>
                <p>Check out for</p>
                <button type='button'>More</button>
            </div>
        </div>
        <div className='gui_features-mission'>
            <div className='gui_features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
            <div className='gui_features-image'>
                <img src={mission} alt="mission" />
            </div>
        </div>
    </div>    
    );

export default Features;