import React, { Component } from 'react';
import axios from 'axios'
import * as ReactBootstrap from 'react-bootstrap';

class Favorites extends Component {
    constructor() {
        super();
        this.state = { 
            favorites: [],
         }
    }

    componentDidMount(){
        console.log("Hello from Favorites")
        this.getFavorites();
    }

    async getFavorites() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/users/1/favorites/');
            console.log(response.data)
            this.setState({
                favorites: response.data
            })
        }
        catch (ex) {
            console.log('Error in call')
        }
    }
    render() { 
        return ( 
            <div>
                <ReactBootstrap.Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.favorites.map(favorite => {
                        return(
                            <tr key={favorite.id}>
                                <td>{favorite.id}</td>
                                <td>{favorite.title}</td>
                                <td>{favorite.artist}</td>
                                <td>{favorite.album}</td>
                            </tr>
                        )
                    })}
                </tbody>
                </ReactBootstrap.Table>
            </div>
         );
    }
}
 
export default Favorites;