import React, {Component} from 'react';
import {MapContainer, GeoJSON, ZoomControl} from 'react-leaflet';
import mapData from '../data/countries.json';
import "leaflet/dist/leaflet.css";
import "./MyMap.css"

class MyMap extends Component {
    state = {}

    countryStyle = {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 2,
        dashArray: 1,
    }

    render() {
        return(
        <div>
            <h1 style={{ textAlign: "center "}}>My Map</h1>
            <MapContainer style={{height: "80vh"}} zoom={2} center={[20, 100]} zoomControl={false}>
                <GeoJSON data={mapData.features} />
                <ZoomControl position="bottomright" />
            </MapContainer>
        </div>
        )
    }
}

export default MyMap;