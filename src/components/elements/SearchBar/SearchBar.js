import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        value : ''
    }

    doSearch = (event) => {
        this.setState({
            value : event.target.value
        });
        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value);
        }, 500);
    }

    render(){
        return (
            <div className="bl-searchbar">
                <div className="bl-searchbar-content">
                    <input
                        type="text"
                        className="bl-searchbar-input"
                        placeholder="search"
                        value={this.state.value}
                        onChange={this.doSearch}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;