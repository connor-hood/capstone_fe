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
import VideoDetail from './VideoDetail/videoDetail';
import VideoList from './VideoList/videoList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            selectedVideo: null,
            selectedTab: null,
            favorites: [],
            playlist: [],
            videos: [],
        }
    }
    
    
    handleSubmit = async (termFromSearchBar) => {
        const ytresponse = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        console.log(ytresponse)
        /* const sresponse = await songsterr.get('/', {
            params: {
                s: termFromSearchBar
            }
        }) */
        this.setState({
            videos: ytresponse.data.items,
            //selectedTab: sresponse
        });
    }
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
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
            <Searchbar onSubmit={this.handleSubmit}/>
            
            
            </div>
        );
    }
}

export default App;