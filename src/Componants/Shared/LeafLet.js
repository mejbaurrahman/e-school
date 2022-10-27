import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import L from "leaflet";

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

class Leaflet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          location_id: 2,
          location_name: "Dhaka Bangladesh",
          location_lat: "23.745380549222965",
          location_long: " 90.37372672541824"
        },
      ],
      zoom: 4
    };
  }

  render() {
    return (
      <MapContainer
        style={{ height: "400px", width:'100%' }}
        zoom={8}
        center={[23.745589, 90.15972]}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.data.map((location, index) => (
          <Marker
            icon={customMarker}
            key={`marker-${index}`}
            position={[location.location_lat, location.location_long]}
          >
            <Popup>{location.location_name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}

export default Leaflet;
