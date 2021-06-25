import React, { Component } from 'react';
import NavBar from './NavBar/navBar';
import Home from './Home/home';

import './app.css'

class App extends Component {
    state = { }
    render() {
        return (
            <div>
            <h1>Ultimate Music Lover</h1>
            <NavBar />
            <Home />
            </div>
        );
    }
}

export default App;