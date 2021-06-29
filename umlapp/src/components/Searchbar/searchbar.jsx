import React from 'react';

class Searchbar extends React.Component {
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
            <h4 style={{textAlign:"center"}}>This app is designed with the music enthusiasts in mind. Search any song below and find the music video and tablature side by side for all your favorite songs!</h4>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search"></label>
                        <br />
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search any song..."/>
                        <button type= "submit">Search</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

export default Searchbar;