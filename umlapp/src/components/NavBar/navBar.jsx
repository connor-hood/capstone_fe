import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

function NavBar() {
    return (
        <div className="sidenav">
            <Link to={'/'} style={{textDecoration: 'inherit', color: '#FFFFFF'}}>
            <p>Home</p>
            </Link>
            <Link to={'/library'} style={{textDecoration: 'inherit', color: '#FFFFFF'}}>
            <p>My Library</p>
            </Link>
            <Link to={'/'} style={{textDecoration: 'inherit', color: '#FFFFFF'}}>
            <p>Saved Playlists</p>
            </Link>
            <ul>
                <li><Link to="/" style={{textDecoration: 'inherit', color: '#FFFFFF'}}>Highest Rated</Link></li>
                <li><Link to="/playlist" style={{textDecoration: 'inherit', color: '#FFFFFF'}}>Custom 1</Link></li>
                <li><Link to='/create' style={{textDecoration: 'inherit', color: '#FFFFFF'}}>Create a new one</Link></li>
            </ul>

        </div>
    )
}

export default NavBar;