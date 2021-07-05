import axios from 'axios';
import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../app.css'

class Playlist extends Component {
    constructor(){
        super();
        this.state = {
         songs:[]
    }
    }
    componentDidMount(){
        console.log("Hello from playlist")
        this.makeGetRequest();
    };

    async makeGetRequest() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/songs/');
            console.log(response.data)
            this.setState({
                songs: response.data
            })
        }
        catch (ex) {
            console.log('Error in call')
        }
    }
    render(){
    return (
        <div>
            <ReactBootstrap.Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                    {this.state.songs.map(song => {
                        return(
                            <tr key={song.id}>
                                <td>{song.id}</td>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.ranking}</td>
                            </tr>
                        )
                    })}
            </tbody>
            </ReactBootstrap.Table>
        </div>
    )}
}

export default Playlist;