import React, { Component } from 'react';
import youtube from '../apis/youtube';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/navBar';
import Home from './Home/home';
import Library from './Library/mylibrary';
import Playlist from './Playlist/playlist';
import Favorites from './Favorites/favorites';
import NewPlaylist from './NewPlaylist/newPlaylist';
import SongInfo from './SongInfo/songInfo';
import Searchbar from './Searchbar/searchbar';
import './app.css';
import songsterr from '../apis/songsterr';

class App extends Component {
    constructor(){
        super();
        this.state = {
            selectedVideo: null,
            selectedTab: null,
            favorites: [],
            playlist: [],
        }
    }
    componentDidMount() {
        console.log("hello")
    }
    
    handleSubmit = async (termFromSearchBar) => {
        const ytresponse = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        const sresponse = await songsterr.get('/', {
            params: {
                
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
            <Searchbar />
            <SongInfo />
            </div>
        );
    }
}

export default App;