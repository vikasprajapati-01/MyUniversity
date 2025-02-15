import React from 'react'
import { Link } from 'react-scroll'

import './Campus.css'

import campusImage1 from '../../assets/gimage-1.jpg'
import campusImage2 from '../../assets/gimage-2.jpg'
import campusImage3 from '../../assets/gimage-3.jpg'
import campusImage4 from '../../assets/gimage-4.jpg'
import whiteNextIcon from '../../assets/whiteNext-icon.png'

function Campus() {
    return(
        <div className="campus">
            <div className="gallery">
                <img src={campusImage1} alt="" />
                <img src={campusImage2} alt="" />
                <img src={campusImage3} alt="" />
                <img src={campusImage4} alt="" />
            </div>
            <Link to='contact' className='btn dark-btn' smooth={true} offset={-260} duration={500} > To know more <img src={whiteNextIcon} alt="" /></Link>
        </div>
    );
}

export default Campus