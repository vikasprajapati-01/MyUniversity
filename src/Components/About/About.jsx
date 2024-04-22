import React from 'react';

import './About.css'

import playIcon from '../../assets/play-icon.png'
import aboutImg from '../../assets/about.jpg'

function About() {
    return(
        <div className='about'>
            <div className="about-left">
                <img src={aboutImg} alt="" className='about-img' />
                <img src={playIcon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Growing Intelligent Minds</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non quo mollitia eligendi debitis impedit corporis quidem eaque adipisci ipsam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus error consequatur. Saepe numquam, enim ex tempora, voluptatum expedita provident maiores suscipit nesciunt delectus culpa facere in quidem velit dolores!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem necessitatibus iusto voluptatibus ipsum, expedita cupiditate?</p>
            </div>
        </div>
    );
}

export default About