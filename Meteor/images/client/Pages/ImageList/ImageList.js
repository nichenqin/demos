import React, { Component } from "react";
import ImageDetail from "../ImageDetail/ImageDetail";

const images = [
    { title: "Pen", link: "https://dummyimage.com/64x64" },
    { title: "Ping Tree", link: "https://dummyimage.com/64x64" },
    { title: "Mug", link: "https://dummyimage.com/64x64" }
];

class ImageList extends Component {
    renderImages() {
        const { images } = this.props;
        const validatedImages = images.filter(image => !image.is_album);
        return validatedImages.map(image => <ImageDetail key={image.title} image={image} />);
    }

    render() {
        return (
            <ul className="media-list list-group">
                {this.renderImages()}
            </ul>
        );
    }
}

export default ImageList;
