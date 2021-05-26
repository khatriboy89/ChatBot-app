import React from 'react'
import './InputBar.css'

const InputBar = ({ message, setMessage, sendMessage }) => (
    <form className='form'>
        <input type="text" className='input' placeholder='Type a message...' value={message} onChange={(event) => { setMessage(event.target.value) }}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null} />
            <button className='sendButton' onClick={(event)=>sendMessage(event)}>Send</button>
    </form>
)
export default InputBar
