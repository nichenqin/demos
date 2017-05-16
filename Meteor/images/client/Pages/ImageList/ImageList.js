import React, { Component } from "react";
import ImageDetail from "../ImageDetail/ImageDetail";

const images = [
    { title: "Pen", link: "https://dummyimage.com/600x400" },
    { title: "Ping Tree", link: "https://dummyimage.com/600x400" },
    { title: "Mug", link: "https://dummyimage.com/600x400" }
];

class ImageList extends Component {
    renderImages() {
        return images.map(image => <ImageDetail image={image} />);
    }

    render() {
        return (
            <ul>
                {this.renderImages()}
            </ul>
        );
    }
}

export default ImageList;
