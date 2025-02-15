import React from 'react'

import './Minihome.css'
import front_arrow from '../../assets/next-icon.png'
import { Link } from 'react-scroll';

function Minihome() {
    return(
        <div className="minihome container">
            <div className="minihome-text">
                <h1>Empowering minds, shaping futures.</h1>
                <p>Unlock your potential, embrace innovation, and shape the future with us.</p>
                <Link to='contact' className='btn' smooth={true} offset={-260} duration={500}>Contact Us <img src={front_arrow} alt="" /> </Link>
            </div>
        </div>
    );
}

export default Minihome