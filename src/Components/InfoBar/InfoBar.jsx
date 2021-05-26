import React from 'react'
import './InfoBar.css';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({room}) => (
    <div className="InfoBar">
        <div className="leftInnerContainer">
            <img src={onlineIcon} className="onlineIcon" alt='OnlineImage' />
            <h3>Room NO. {room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/">
                <img  className="closeIcon"src={closeIcon} alt="CloseImage" />
            </a>
        </div>
    </div>
)
export default InfoBar
