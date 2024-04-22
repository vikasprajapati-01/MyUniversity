
import React , { useRef } from 'react'

import './Review.css'

import next_icon from '../../assets/whiteNext-icon.png'
import back_icon from '../../assets/whiteBack-icon.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'

function Review() {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return(
        <div className="review">
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Naruto Namikaze</h3>
                                    <span>VP University, Leaf village</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur illum, quasi dignissimos enim mollitia, vero delectus omnis aut veniam sed? Asperiores debitis cumque eos.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Sasuke Uchiha</h3>
                                    <span>VP University, Leaf village</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus natus voluptas adipisci ipsa fuga molestiae expedita, impedit suscipit tempore tempora asperiores architecto laboriosam eligendi in.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Rock Lee</h3>
                                    <span>VP University, Leaf village</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, magni minus. Temporibus adipisci inventore tempora dolorem voluptate incidunt ducimus asperiores, eum repellendus, ab beatae voluptatum?</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Gaara</h3>
                                    <span>VP Unversity, Leaf village</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iure, voluptas totam laudantium, illum sapiente assumenda iste fugiat sed asperiores, voluptatem qui non quis provident?</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Review