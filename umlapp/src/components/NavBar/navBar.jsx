import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

function NavBar() {
    return (
        <div className="sidenav">
            <Link to='/' style={{textDecoration: 'inherit', color: '#707070'}}>
            <p>Home</p>
            </Link>
            <Link to='/favorites' style={{textDecoration: 'inherit', color: '#707070'}}>
            <p>My Favorites</p>
            </Link>
            <Link to='/playlists' style={{textDecoration: 'inherit', color: '#707070'}}>
            <p>Saved Playlists</p>
            </Link>
            <ul>
                <li><Link to="/" style={{textDecoration: 'inherit', color: '#707070'}}>Highest Rated</Link></li>
                <li><Link to="/" style={{textDecoration: 'inherit', color: '#707070'}}>Custom 1</Link></li>
                <li><Link to='/create' style={{textDecoration: 'inherit', color: '#707070'}}>Create a new one</Link></li>
            </ul>

        </div>
    )
}

export default NavBar;