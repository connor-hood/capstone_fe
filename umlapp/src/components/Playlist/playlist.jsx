import axios from 'axios';
import React, { useState, useEffect } from 'react';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import '../app.css'
import Datatable from '../Datatable/datatable'

function Playlist() {
    const [data, setData] = useState([])
    const [q, setQ] = useState("")

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/users/1/playlists/1/`)
        .then(response => response.json()
        .then(json => setData(json))
        )
    }, [])

    /* function search(rows) {
        return rows.filter(row => 
            row.title.toLowerCase().indexOf(q) > -1 ||
            row.artist.toLowerCase().indexOf(q) > -1 ||
            row.album.toLowerCase().indexOf(q) > -1)
    } */

    return (
        <div>
            <div>
                <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Find a song..."/>
            </div>
            <div><Datatable data={/* search( */data/* ) */}/></div>
        </div>
    )
}

export default Playlist