import React from 'react';
import './navBar.css'

function NavBar() {
    return (
        <div className="sidenav">
            <p>Home</p>
            <p>My Library</p>
            <p>Saved Playlists</p>
            <ul>
                <li><a href="/" >Highest Rated</a></li>
                <li><a href="/">Custom 1</a></li>
                <li><a href="/">Create a new one</a></li>
            </ul>

        </div>
    )
}

export default NavBar;