import React, { Component } from 'react';
import axios from 'axios'

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            favorites: [],
         }
    }

    componentDidMount(){
        console.log("Hello from Favorites")
        this.getFavorites();
    }

    getFavorites(){
        let data = axios.get('http://127.0.0.1:8000/users/1/favorites')
        this.setState({
            favorites: data.data
        })
    }
    render() { 
        return ( 
            <div>
                <h4>Hello from favorites</h4>
            </div>
         );
    }
}
 
export default Favorites;