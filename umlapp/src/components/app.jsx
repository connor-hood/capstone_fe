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
    
    handleOnClick = () => {
        console.log("Hello, is this")
    }
    
    /* handleSubmit = async (termFromSearchBar) => {
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
            this.setState({
                videos: ytresponse.data.items,
                //selectedTab: sresponse
            });
        }
        
        handleVideoSelect = (video) => {
            this.setState({selectedVideo: video})
        }
        
    }) */
    
    render() {
        return (
            <div>
            <h1>Ultimate Music Lover</h1>
            <Router>
            <NavBar />
            <Switch>
                <Route path="/" component={Home} />
                <Route exact path="/users/1/favorites" component={Favorites}/>
                    <Favorites
                    favorites={this.state.favorites} />
            </Switch>
            </Router>
            <div className="container">
            
            </div>
            </div>
        );
    }
}

export default App;