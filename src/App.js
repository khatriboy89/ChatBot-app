import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Join from './Components/Join/Join'
import Chat from './Components/Chat/Chat'
import './App.css'
const app = () => {
    return(
        <Router>
            <Route path='/' exact component={Join}/>
            <Route path='/chat'  component={Chat}/>
        </Router>
    )
}

export default app
