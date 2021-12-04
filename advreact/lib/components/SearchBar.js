import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value});
        console.log(this.state.searchTerm);
    }
    render() {
        return (
            <input 
            type="search"
            placeholder="search for"
            value={this.state.searchTerm}
            onChange={this.handleSearch}
            />
        );
    }
}

export default SearchBar;