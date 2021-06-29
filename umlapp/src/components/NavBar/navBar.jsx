import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

function NavBar() {
    return (
        <div className="sidenav">
            <Link to='/'>
            <p>Home</p>
            </Link>
            <Link to='/favorites'>
            <p>My Favorites</p>
            </Link>
            <Link to='/playlists'>
            <p>Saved Playlists</p>
            </Link>
            <ul>
                <li><a href="/" >Highest Rated</a></li>
                <li><a href="/">Custom 1</a></li>
                <li><Link to='/create'>Create a new one</Link></li>
            </ul>

        </div>
    )
}

export default NavBar;