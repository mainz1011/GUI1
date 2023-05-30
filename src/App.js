import React from 'react';

import { CTA, Navbar } from './components';
import { Features, Footer, Header, WhatGUI } from './containers';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div> 
            <WhatGUI />
            <Features />
            <CTA />
            <Footer />
        </div>
    )
}

export default App