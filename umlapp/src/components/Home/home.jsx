import React, { Component } from 'react';
import SongInfo from '../SongInfo/songInfo';
import Searchbar from '../Searchbar/searchbar';
import './home.css'

class Home extends Component {
    state = {}
    render() {
        return(
            <div className='headwrap'>
                <Searchbar />
                <SongInfo />
            </div>
        )
    }
}

export default Home;