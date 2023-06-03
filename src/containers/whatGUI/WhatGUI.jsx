import React from 'react';
import { Feature } from '../../components';
import './whatGUI.css'; 

const WhatGUI = () => {
    return (
        <div className='gui_whatgui section_margin' id='wgui'>
            <div className='gui_whatgui-feature'>
                <Feature title='What is PanTech?' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
            </div>
            <div className='gui_whatgui-heading'>
                <h1 className='gradient_text'>Beyond your imagination...</h1>
                <div className='gui_whatgui-button'>
                    <p>Click Here for</p>
                    <button type='button'>More</button>
                </div>
            </div>
            <div className='gui_whatgui-container'>
                <Feature title='New PandaGUI Technologies' text='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.' />
                <Feature title='New PandaHCI Technologies' text='Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.' />
                <Feature title='The Birth of PandaTech' text='Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.' />
            </div>
        </div>
    )
}

export default WhatGUI