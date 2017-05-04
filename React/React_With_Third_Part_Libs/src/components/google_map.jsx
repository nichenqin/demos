import React, { Component } from 'react';

class GoogleMap extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: 8
        })
    }

    render() {
        return (
            <div id="map" ref="map">
                Google Map
            </div>
        );
    }
}

export default GoogleMap;
