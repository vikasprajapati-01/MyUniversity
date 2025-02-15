import React , { useState } from 'react';

import './About.css'

import playIcon from '../../assets/play-icon.png'
import aboutImg from '../../assets/about.jpg'

function About({setPlayStatus}) {
    return(
        <div className='about'>
            <div className="about-left">
                <img src={aboutImg} alt="" className='about-img' />
                <img src={playIcon} alt="" className='play-icon' onClick={() => { setPlayStatus(true) }}/>
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Growing Intelligent Minds</h2>
                <p>VP University is committed to academic excellence. Our diverse programs, world-class faculty, and state-of-the-art facilities provide students with an exceptional learning experience.</p>
                <p>We offer a wide range of undergraduate, postgraduate, and research programs across various disciplines. Our alumni have excelled in various industries, making significant contributions worldwide.</p>
                <p>At VP University, we believe in nurturing not just academics but also personal growth. With a vibrant campus life, numerous clubs, and global exchange opportunities, students develop skills that prepare them for a dynamic future.</p>
            </div>
        </div>
    );
}

export default About