import React, { Component } from 'react';
import NavBar from './NavBar/navBar';

class App extends Component {
    state = { }
    render() {
        return (
            <div>
            <h1>Ultimate Music Lover</h1>
            <NavBar />
            </div>
        );
    }
}

export default App;