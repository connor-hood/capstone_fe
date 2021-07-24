import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import youtube from '../apis/youtube';
import songsterr from '../apis/songsterr';
import NavBar from './NavBar/navBar';
import Library from './Library/mylibrary';
import Playlist from './Playlist/playlist';
import Favorites from './Favorites/favorites';
import NewPlaylist from './NewPlaylist/newPlaylist';
import SongInfo from './SongInfo/songInfo';
import Searchbar from './Searchbar/searchbar';
import './app.css';
import VideoList from './VideoList/videoList';
import Home from './Home/home';

class App extends Component {
    constructor(){
        super()
        this.state = {
            selectedVideo: null,
            selectedTab: null,
            favorites: [],
            playlist: [],
            videos: [],
            rating: 0,  
        }
    }
    handleSubmit = async (term) => {
        const ytresponse = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        
        this.setState({
            videos: ytresponse.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    
    filterSongsBySearch = (songs, query) => {
        if(!query){
            return songs;
        }
        let filteredSongs = songs.filter((song) => {
            if(song.name.toLowerCase().includes(query.toLowerCase())){
                return true;
            }
        })
        return filteredSongs;
    }
    render() {
        return (
            <div>
            <h1>Ultimate Music Lover</h1>
            
            <NavBar />
            <Switch>
                <Route path="/" component={Home}>
                    <Home
                    selectedVideo={this.state.selectedVideo}
                    handleVideoSelect={this.state.handleVideoSelect}
                    videos={this.state.videos}
                    video={this.state.selectedVideo}
                    tab={this.state.selectedTab}
                    handleFormSubmit={this.handleFormSubmit}
                    />
                </Route>
                <Route exact path="/library" component={Library}/>
                    <Library />
                <Route exact path="/playlist" component={Playlist}>
                    <Playlist />
                </Route>
            </Switch>
            
                
            </div>
        );
    }
}

export default App;

//checked