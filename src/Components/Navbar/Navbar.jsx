import React, { useState, useEffect} from 'react'
import { Link } from 'react-scroll';

import './Navbar.css';

import logo from '../../assets/whiteVPLogo.png'

function Navbar() {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 250 ? setSticky(true) : setSticky(false)
        })
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''} `}>
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li><Link to='minihome' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='courses' smooth={true} offset={-260} duration={500}>Courses</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='review' smooth={true} offset={-260} duration={500}>Review</Link></li>
                <li><Link className="btn" to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar