import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map({ sights, trip }) {
  const customIcon = new L.Icon({
    iconUrl: "/map-marker.svg",
    iconSize: [50, 50],
  });
  return (
    <StyledMapContainer center={trip.geocode} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sights.map(
        (sight) =>
          sight.geocode && (
            <Marker
              key={sight.id}
              position={sight.geocode}
              draggable={true}
              icon={customIcon}
            >
              <Popup>
                <h3>{sight.name}</h3>
              </Popup>
            </Marker>
          )
      )}
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled(MapContainer)`
  margin: 19rem 0 7rem 0;
  width: 100%;
  height: 56vh;
  z-index: 0;
`;
