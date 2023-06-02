import React from 'react';
import logo from '../../assets/GUI.PNG';
import './footer.css';

const Footer = () => (
  <div className="gui_footer section_padding">
    <div className="gui_footer-heading">
      <h1 className="gradient_text">Do you want to step in to the future before others?</h1>
    </div>
    <div className="gui_footer-btn">
      <p>Request Early Access</p>
    </div>
    <div className="gui_footer-links">
      <div className="gui_footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>All Rights Reserved</p>
      </div>
      <div className="gui_footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gui_footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="gui_footer-links_div">
        <h4>Get in touch</h4>
        <p>043 7878787</p>
        <p>jsjsinfo@gmail.com</p>
      </div>
    </div>
    <div className="gui_footer-copyright">
      <p>@2022 GUIproject. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;