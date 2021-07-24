import React, { useState, useEffect } from 'react'
import io from "socket.io-client";
import queryString from 'query-string'
import InfoBar from '../InfoBar/InfoBar'
import InputBar from '../InputBar/InputBar'
import MessagesBox from '../MessagesBox/MessagesBox'
import './Chat.css'
const ENDPOINT = "https://chatbot-server-socketio.herokuapp.com/";

let socket;
const Chat = ({ location }) => {
    const [Name, setName] = useState('')
    const [Room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')

    // Effects
    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        socket = io(ENDPOINT);
        setName(name)
        setRoom(room)
        socket.emit('join', { name, room },(error) => {
            if(error) {
              alert(error);
            }
          });
    }, [ENDPOINT, location.search])
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((messages => [ ...messages, message ]))
        })
    }, [])
    const sendMessage = (event) => {
        event.preventDefault()
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    return (
        <div className="chatOuterContainer">
            <div className="chatInnerContainer">
                    <InfoBar room={Room}/>
                    <MessagesBox messages={messages} name={Name}/>
                    <InputBar message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat
