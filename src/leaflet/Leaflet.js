import React from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

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

        //this.marker = L.marker(this.props.markerPosition).addTo(this.map);
    }

    render() {
        return <div style={{ height: '250px' }} id="map" />;
    }
}

export default Map;
