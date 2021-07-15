import React, {Component}from 'react';

class Searchbar extends Component {
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
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search"></label>
                        <br />
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search any song..."/>
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

export default Searchbar;