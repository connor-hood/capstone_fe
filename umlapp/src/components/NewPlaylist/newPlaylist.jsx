import React, { Component } from 'react';


class NewPlaylist extends Component {
    state = {
        name: "",
        description: ""
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Playlist Name</h1>
                    <label for="name"></label>
                    <input type="text" id="name" name="name"></input>
                    <h1>Playlist Description</h1>
                    <label for="description"></label>
                    <input type="text" id="description" name="description"></input>
                    <br />
                    <button>Add Playlist!</button>
                </form>
            </div>
        )
    }
}

export default NewPlaylist