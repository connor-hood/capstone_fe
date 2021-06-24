import React from 'react';
import './home.css'

function Home() {
    return(
        <div>
            <h2>This app is designed with the music enthusiasts in mind. Search any song below and find the music video and tablature side by side for all your favorite songs!</h2>
            <form>
            <label for="search"></label>
            <input type="text" id="search" name="search" placeholder="Search..."/>
            <br />
            <button>Listen!</button>
            </form>
        </div>
    )
}

export default Home;