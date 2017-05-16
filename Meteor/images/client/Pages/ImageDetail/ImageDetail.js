import React, { Component } from "react";

class ImageDetail extends Component {
    render() {
        return (
            <li>
                <img src={this.props.image.link} alt="" />
                {this.props.image.title}
            </li>
        );
    }
}

export default ImageDetail;
