import React from 'react';
import './navBar.css'

function NavBar(props) {
    return (
        <div>
            <h5>Home</h5>
            <h5>My Library</h5>
            <h5>Saved Playlists</h5>
            <ul>
                <li><a href="/" >Highest Rated</a></li>
                <li><a href="/">Custom 1</a></li>
                <li><a href="/">Create a new one</a></li>
            </ul>

        </div>
    )
}

export default NavBar;