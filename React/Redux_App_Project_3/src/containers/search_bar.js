import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form
                onSubmit={this.onFormSubmit.bind(this)}
                className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorate cities"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)} />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;