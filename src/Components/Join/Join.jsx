import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'
const Join = () => {
    const [Name, setName] = useState('')
    const [Room, setRoom] = useState('')
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="heading">Join</div>
                <div><input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} className='joinInput mt-20' /></div>
                <div><input type='number' placeholder='Room' onChange={(e) => setRoom(e.target.value)} className='joinInput mt-20' /></div>
                <Link to={`/chat?name=${Name}&room=${Room}`} onClick={Event => (!Name || !Room) ? Event.preventDefault() : null}>
                    <button className='button mt-20' type='button' >join</button>
                </Link>
            </div>
        </div>
    )
}
export default Join
