import React, { Component } from "react";

class ImageDetail extends Component {
    render() {
        return (
            <li>
                <div className="media list-group-item">
                    <div className="media-left">
                        <img src={this.props.image.link} alt="" />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">
                            {this.props.image.title}
                        </h4>
                    </div>
                </div>
            </li>
        );
    }
}

export default ImageDetail;
