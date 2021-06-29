import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Searchbar;