import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/navBar';
import Home from './Home/home';
import Library from './Library/mylibrary';
import Playlist from './Playlist/playlist';
import Favorites from './Favorites/favorites';
import NewPlaylist from './NewPlaylist/newPlaylist';
import './app.css';

class App extends Component {
    state = { }
    render() {
        return (
            <div>
            <h1>Ultimate Music Lover</h1>
            <NavBar />
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/library" component={Library} />
                <Route path="/playlists" component={Playlist} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/create" component={NewPlaylist} />
            </Switch>
            </div>
        );
    }
}

export default App;