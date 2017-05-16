import React, { Component } from "react";
import ImageScores from "./ImageScroes";

class ImageDetail extends Component {
    render() {
        const { image } = this.props;
        return (
            <li>
                <div className="media list-group-item">
                    <div className="media-left">
                        <img src={image.link} alt="" />
                    </div>
                    <div className="media-body">
                        <h3 className="media-heading">
                            {image.title}
                        </h3>
                        <p>{image.description}</p>
                        <ImageScores ups={image.ups} downs={image.downs} />
                    </div>
                </div>
            </li>
        );
    }
}

export default ImageDetail;
