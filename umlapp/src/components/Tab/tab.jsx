import React, { Component } from 'react';
import axios from 'axios'
import songsterr from '../../apis/songsterr';


class Tab extends Component {
    state = { 
        selectedSong: '',
     }
    componentDidMount() {
        console.log("hello from tab")
        
    }
    render() { 
        return (
            <div>
                <h3>Tab viewer</h3>
                <h4>{this.state.selectedSong}</h4>
            </div>
         );
    }
}
 
export default Tab;