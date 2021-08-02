import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import youtube from '../apis/youtube';
import songsterr from '../apis/songsterr';
import NavBar from './NavBar/navBar';
import Home from './Home/home';
import Library from './Library/mylibrary';
import Playlist from './Playlist/playlist';
import Favorites from './Favorites/favorites';
import NewPlaylist from './NewPlaylist/newPlaylist';
import SongInfo from './SongInfo/songInfo';
import Searchbar from './Searchbar/searchbar';
import './app.css';
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
            <Router>
            <NavBar />
            <Switch>
                <Route path="/"  />
                <Route exact path="/library" component={Favorites}/>
                    <Favorites
                    favorites={this.state.favorites} />
                <Route exact path="/playlist" component={Playlist}>
                    <Playlist />
                </Route>
            </Switch>
            </Router>
                <div className="headwrap">
                    <h1 style={{textAlign:"center"}}>This app is designed with the music enthusiast in mind.</h1>
                    <h5 style={{textAlign:"center"}}>Search any song using Youtube's video lookup</h5>
                    <h5 style={{textAlign:"center"}}>Then check out 911 tabs to find the tabs for that song!</h5>
                    <br />
                    <h5 style={{textAlign:"center"}}>Really like a song? Save it to your own favorites list!*</h5>
                    <h5 style={{textAlign:"center"}}>OR</h5>
                    <h5 style={{textAlign:"center"}}>Make a custom playlist!*</h5>
                    <p style={{textAlign:"center"}}>(*Features coming soon)</p>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Searchbar handleFormSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                        <div className='col-md-6'>
                            <SongInfo video={this.state.selectedVideo} tab={this.state.selectedTab}/>
                        </div>
                    </div>
                    <div className='row'>
                        <Library />
                    </div>
                </div>          
            </div>
        );
    }
}

export default App;

//checked