import React, {Component}from 'react';

class SearchBar extends Component {
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
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className="field">
                        <label htmlFor="song-search">Song Search</label>
                        <input onChange={this.handleChange} name="song-search" type="text" placeholder="Search any song..."/>
                        <button type="submit">Submit</button>
                    </div>
                </form>                
            </div>
         );
    }
}
 
export default SearchBar;