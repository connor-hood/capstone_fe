import React, { Component } from 'react';
import Playlist from '../Playlist/playlist';
import './home.css'

class Home extends Component {
    state = {}
    render() {
        return(
            <div className='headwrap'>
                <h4>This app is designed with the music enthusiasts in mind. Search any song below and find the music video and tablature side by side for all your favorite songs!</h4>
                    <form>
                        <label for="search"></label>
                        <input type="text" id="search" name="search" placeholder="Search..."/>
                        <br />
                        <button>Listen!</button>
                    </form>
                <Playlist />
            </div>
        )
    }
}

export default Home;