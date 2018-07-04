import React, { Component } from "react";
import "../../App.css";
import "../../index.css";
import "./Map.css";
import "./MapStyle.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";
import { Map, Marker } from "react-leaflet";

class WrappedMarker extends Component {
  render() {
    const { map, layerContainer } = this.props; //Given by the `Map` component
    return (
      <Marker
        map={map} /* pass down to Marker */
        layerContainer={layerContainer} /* pass down to Marker */
        position={[51.505, -0.09]} //This will render the lat/long from the geoJSON TODO|
        //Test with declaring position as this.props, and then using map() to produce an array of markers on the screen
        //Then create route to findAll({}) on a test GeoJSON layer that I load up.
      />
    );
  }
}

class MapView extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        {/* Map will center on the the persons location- TODO */}
        <Map id="map" center={[51.505, -0.09]} zoom={13}>
          <WrappedMarker />
        </Map>
        <div className="aside">
          RADIUS HOSPITAL RESULTS OF THE USER GO HERE{" "}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MapView;
