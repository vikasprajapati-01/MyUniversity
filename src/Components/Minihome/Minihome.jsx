import React from 'react'

import './Minihome.css'
import front_arrow from '../../assets/next-icon.png'

function Minihome() {
    return(
        <div className="minihome container">
            <div className="minihome-text">
                <h1>Empowering minds, shaping futures.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium delectus laborum, nihil iste tempore assumenda cum provident! Amet, numquam.</p>
                <button className='btn'>Explore More <img src={front_arrow} alt="" /> </button>
            </div>
        </div>
    );
}

export default Minihome