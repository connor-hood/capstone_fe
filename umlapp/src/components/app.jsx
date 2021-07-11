import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import youtube from '../apis/youtube';
import songsterr from '../apis/songsterr';
import NavBar from './NavBar/navBar';
import Home from './Home/home';
import Library from './Library/mylibrary';
import Playlist from './Playlist/playlist';
import Favorites from './Favorites/favorites';
import NewPlaylist from './NewPlaylist/newPlaylist';

import Searchbar from './Searchbar/searchbar';
import './app.css';
import SongInfo from './SongInfo/songInfo';

class App extends Component {
    constructor(){
        super()
        this.state = {
            selectedVideo: null,
            selectedTab: null,
            favorites: [],
            playlist: [],
        }
    }
    
    
    handleSubmit = async (termFromSearchBar) => {
        this.preventDefualt()
        const ytresponse = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        console.log(ytresponse)
        const sresponse = await songsterr.get('/', {
            params: {
                s: termFromSearchBar
            }
        })
        this.setState({
            selectedVideo: ytresponse,
            selectedTab: sresponse
        });
    }
    
    
    
    render() {
        return (
            <div>
            <h1>Ultimate Music Lover</h1>
            
            <NavBar />
            {/* <VideoItem /> */}
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/library" component={Library} />
                <Route path="/playlists" component={Playlist} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/create" component={NewPlaylist} />
            </Switch>
            <Searchbar onSubmit={this.handleSubmit}/>
            
            <SongInfo />
            
            </div>
        );
    }
}

export default App;