import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/navBar';
import Home from './Home/home';
import Library from './Library/mylibrary';
import Playlist from './Playlist/playlist';
import Favorites from './Favorites/favorites';
import NewPlaylist from './NewPlaylist/newPlaylist';
import Searchbar from './Searchbar/searchbar';
import VideoItem from './YouTube/youtube';
import './app.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            selectedVideo: null,
            selectedTab: null,
            favorites: [],
            playlist: []
        }
    }
    
    
    
    
    
    render() {
        return (
            <div>
            <h1>Ultimate Music Lover</h1>
            <NavBar />
            {/* <VideoItem /> */}
            <Switch>
                <Route path="/" component={App} />
                <Route path="/library" component={Library} />
                <Route path="/playlists" component={Playlist} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/create" component={NewPlaylist} />
            </Switch>
            <Searchbar handleFormSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;