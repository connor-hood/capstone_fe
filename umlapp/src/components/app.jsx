import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
    handleSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    render() {
        return (
            <div>
            <h1>Ultimate Music Lover</h1>
            <Router>
            <NavBar />
            <Switch>
                <Route path="/"  />
                <Route exact path="/favorites" component={Favorites}/>
                    <Favorites
                    favorites={this.state.favorites} />
            </Switch>
            </Router>
                <div className="headwrap">
                    <h1 style={{textAlign:"center"}}>This app is designed with the music enthusiast in mind.</h1>
                    <h5 style={{textAlign:"center"}}>Search any song below and find the music video and tablature side by side for all your favorite songs!</h5>
                    <h5 style={{textAlign:"center"}}>Really like a song? Save it to your own favorites list!</h5>
                    <h5 style={{textAlign:"center"}}>OR</h5>
                    <h5 style={{textAlign:"center"}}>Make a custom playlist!</h5>
                    <div className="row">
                        <div className="col-md-12">
                            <Searchbar handleFormSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="col-md-6">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>          
            </div>
        );
    }
}

export default App;