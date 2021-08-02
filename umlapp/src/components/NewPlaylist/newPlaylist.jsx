import React, { Component } from 'react';
import axios from 'axios';
import '../app.css'


class NewPlaylist extends Component {
    state = {
        name: "",
        description: ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();
            const newPlaylist = {
                name: this.state.name,
                description: this.state.description
            }
        await axios.post('http://127.0.0.1:8000/playlists/', newPlaylist)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            this.setState({
                name: "",
                description: "",
            })
        }
    }

    render() {
        return (
            <div className="headwrap">
                <form onSubmit={this.onSubmit}>
                    <h1>Playlist Name</h1>
                    <label for="name"></label>
                    <input type="text" id="name" name="name" placeholder="Name..." onChange={this.onChange}></input>
                    <h1>Playlist Description</h1>
                    <label for="description"></label>
                    <input type="text" id="description" name="description" placeholder="Description..." onChange={this.onChange}></input>
                    <br />
                    <br />
                    <button>Add Playlist!</button>
                </form>
            </div>
        )
    }
}

export default NewPlaylist