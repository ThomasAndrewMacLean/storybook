import React from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './style.css';

const style = {
    width: "100%",
    height: "100%"
  };

class Map extends React.Component {
    componentDidMount() {
        // create map
        this.map = L.map('map', {
            center: [67, 18],
            zoom: 5,
           // zoomControl: false ,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });
  //  this.map.touchZoom.disable();
   // this.map.doubleClickZoom.disable();
    //this.map.scrollWheelZoom.disable();
        var marker = new L.marker([67.5015, 18.1539], { opacity: 0.01 }); //opacity may be set to zero
marker.bindTooltip("Smakelijk en slaapwel vervelede muggen :-D", {permanent: true, className: "my-label", offset: [0, 0] });
marker.addTo(this.map);
       // this.marker = L.marker(this.props.markerPosition).addTo(this.map);
    }

    componentDidUpdate({ markerPosition }) {
        // check if position has changed
        if (this.props.markerPosition !== markerPosition) {
//            this.marker.setLatLng(this.props.markerPosition);
        }
    }

    render() {
        return <div style={style} id="map" />;
    }
}

export default Map;
