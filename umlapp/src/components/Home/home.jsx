import React, { Component } from 'react';
import Searchbar from '../Searchbar/searchbar';
import './home.css'

class Home extends Component {
    state = {}
    render() {
        return(
            <div className='headwrap'>
                <Searchbar />
                
            </div>
        )
    }
}

export default Home;