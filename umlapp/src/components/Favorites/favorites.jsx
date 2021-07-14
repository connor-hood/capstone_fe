import React, { Component } from 'react';
import axios from 'axios'

class Favorites extends Component {
    constructor() {
        super();
        this.state = { 
            favorites: [],
         }
    }

    componentDidMount(){
        console.log("Hello from Favorites")
    }

    getFavorites(){
        let data = axios.get('http://127.0.0.1:8000/users/1/favorites')
        this.setState({
            favorites: data
        })
    }
    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}
 
export default Favorites;