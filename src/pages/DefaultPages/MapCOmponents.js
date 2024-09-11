import React, { Component } from 'react'
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker
} from "react-google-maps";

export class MapCOmponents extends Component {
    render() {
        return (
            <div>
                <GoogleMap
                    defaultZoom={16}
                    defaultCenter={{ lat: 18.559008, lng: -68.388881 }}
                >
                    <Marker
                        position={{
                            lat: 18.559024,
                            lng: -68.388886
                        }}
                    />
                </GoogleMap>
            </div>
        )
    }
}
const Maps = withScriptjs(withGoogleMap(MapCOmponents));

export default () => (
    <Maps
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `550px`, width: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
);

