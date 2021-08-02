/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import youtube from '../apis/youtube';
import NavBar from './NavBar/navBar';
import Home from './Home/home';
import Library from './Library/mylibrary';
import Playlist from './Playlist/playlist';
import Favorites from './Favorites/favorites';
import NewPlaylist from './NewPlaylist/newPlaylist';
import './app.css';

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
                <Route path="/" component={Home}>
                    <Home
                    handleSubmit={this.handleSubmit}
                    handleVideoSelect={this.handleVideoSelect}
                    videos={this.state.videos}
                    selectedVideo={this.state.selectedVideo}
                    selectedTab={this.state.selectedTab}
                     />
                </Route>
                <Route exact path="/favorites" component={Favorites}/>
                    <Favorites
                    favorites={this.state.favorites} />
                <Route exact path="/playlist" component={Playlist}>
                    <Playlist />
                </Route>
                <Route exact path="/library" component={Library}>
                    <Library />
                </Route>
                <Route exact path="/create" component={NewPlaylist}>
                    <NewPlaylist />
                </Route>
            </Switch>
            </Router>
                
            </div>
        );
    }
}

export default App;

//checked