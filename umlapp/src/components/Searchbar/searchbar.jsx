import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: 'Default Text'
    };

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    render() {
        return (
            <>
            <h1 style={{textAlign:"center"}}>This app is designed with the music enthusiast in mind.</h1>
            <h5 style={{textAlign:"center"}}>Search any song below and find the music video and tablature side by side for all your favorite songs!</h5>
            <h5 style={{textAlign:"center"}}>Really like a song? Save it to your own favorites list!</h5>
            <h5 style={{textAlign:"center"}}>OR</h5>
            <h5 style={{textAlign:"center"}}>Make a custom playlist!</h5>
            <div className='search-bar ui segment'>
                <form onSubmit={this.props.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Search</label>
                        <br />
                        <input onChange={this.handleChange} 
                        name='video-search' 
                        type="text" 
                        placeholder="Search any song..."
                        value={this.state.term}/>
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

export default Searchbar;