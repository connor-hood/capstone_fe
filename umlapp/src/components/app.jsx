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
import VideoDetail from './YouTube/youtube';
import VideoList from './VideoList/videoList';
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
            videos: [],
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
       /*  const sresponse = await songsterr.get('/', {
            params: {
                s: termFromSearchBar
            }
        }) */
        this.setState({
            videos: ytresponse.data.items
            //selectedTab: sresponse
        })
    };
    handleVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    
    
    render() {
        return (
            <div className="ui container" style={{marginTop: '1em'}}>
            <h1>Ultimate Music Lover</h1>
            <Searchbar handleFormSubmit={this.handleSubmit}/>
            <div className='ui grid'>
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
            
           
            
            </div>
        );
    }
}

export default App;