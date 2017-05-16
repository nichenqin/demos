import React, { Component } from "react";
import ImageList from "./Pages/ImageList/ImageList";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { images: [], erroe: "" };
    }

    componentWillMount() {
        axios.get("https://api.imgur.com/3/gallery/hot/viral/0.json")
            .then(response => this.setState({ images: response.data.data }))
            .catch(error => this.setState({ error }));
    }

    render() {
        if (this.state.error) return <div className="alert alert-danger">{this.state.error}</div>;

        return (
            <div className="container">
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
