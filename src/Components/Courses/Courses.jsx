import React from 'react'

import './Courses.css'

import course1 from '../../assets/degree.jpg'
import course2 from '../../assets/mastersDegree.jpg'
import course3 from '../../assets/phD.jpeg'
import study from '../../assets/whiteStudy-icon.png'

function Courses() {
    return(
        <div className='courses'>
            <div className="course">
                <img src={course1} alt="" />
                <div className="caption">
                    <img src={study} alt="" />
                    <p>Degree</p>
                </div>
            </div>
            <div className="course">
                <img src={course2} alt="" />
                <div className="caption">
                    <img src={study} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="course">
                <img src={course3} alt="" />
                <div className="caption">
                    <img src={study} alt="" />
                    <p>Ph. D</p>
                </div>
            </div>
        </div>
    );
}

export default Courses