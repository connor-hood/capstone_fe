import React, { Component } from 'react';
import songsterr from '../../apis/songsterr';


class Tab extends Component {
    
    componentDidMount() {
        console.log("hello from tab")    
    }
    handleSubmit = async (termFromSearch) => {
        let response = await songsterr.get({
            params: {
                s: termFromSearch
            }
        })
        console.log(response.data)
        this.setState = ({
            selectedSong: response.data
        })
    }
    render() { 
        return (
            <div>
                <h3>Tab viewer</h3>
                <p></p>
            </div>
         );
    }
}
 
export default Tab;