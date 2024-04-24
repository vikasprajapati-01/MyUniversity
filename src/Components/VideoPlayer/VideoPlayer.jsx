import React , { useRef } from 'react';

import './VideoPlayer.css'
import video from '../../assets/check.mp4'

function VideoPlayer(props) {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current) {
            props.setPlayStatus(false);
        }
    }

    return(
        <div className={`video-player ${props.playStatus ? '' : 'hide' } `} ref={player} 
                                                            onClick={closePlayer} >
            <video src={video} autoPlay muted controls ></video>
        </div>
    );
}

export default VideoPlayer