import React, { Component } from 'react'
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker
} from "react-google-maps";
import { Container, Row, Col } from 'react-bootstrap';
export class LocationNearbyComponents extends Component {
    render() {
        return (
            <div>
                {/* <Container> */}
                <Row>
                    <div className='col-sm-12 col-lg-4'>
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
                </Row>
                {/* </Container> */}

            </div>
        )
    }
}

// export default LocationNearbyComponents
const Maps = withScriptjs(withGoogleMap(LocationNearbyComponents));
export default () => (
    <Maps
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px`, width: "300px", float: `left` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
);