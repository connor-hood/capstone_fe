import React from 'react';
import Searchbar from '../Searchbar/searchbar';
import VideoList from '../VideoList/videoList';
import SongInfo from '../SongInfo/songInfo';

const Home = (props) => {
    const handleFormSubmit = props.handleFormSubmit;
    return (
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
                    
                </div>                
    )
}

export default Home;