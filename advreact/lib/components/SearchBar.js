import React from 'react';

class SearchBar extends React.Component {
    handleSearch = () => {
        console.log(this.searchInput.value);
    }
    render() {
        return (
            <input 
            ref={(input) => this.searchInput = input}
            type="search"
            placeholder="search for"
            onChange={this.handleSearch}
            />
        );
    }
}

export default SearchBar;