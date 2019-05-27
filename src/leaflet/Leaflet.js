import React from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';


const style = {
    width: "100%",
    height: "300px"
  };

class Map extends React.Component {
    componentDidMount() {
        // create map
        this.map = L.map('map', {
            center: [51.062935, 3.6823739],
            zoom: 13,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });

        this.marker = L.marker(this.props.markerPosition).addTo(this.map);
    }

    componentDidUpdate({ markerPosition }) {
        // check if position has changed
        if (this.props.markerPosition !== markerPosition) {
            this.marker.setLatLng(this.props.markerPosition);
        }
    }

    render() {
        return <div style={style} id="map" />;
    }
}

export default Map;
