import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import {
  MapContainer,
  TileLayer,
  Marker,
  AttributionControl,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map({ sights }) {
  console.log(sights);
  const customIcon = new L.Icon({
    iconUrl: "map-marker3.svg",
    iconSize: [50, 50],
  });

  return (
    <>
      <p>Test</p>
      <StyledMapContainer center={[31.95, 35.933]} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sights.map((sight) =>
          sight.inItinerary ? (
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
          ) : null
        )}
      </StyledMapContainer>
    </>
  );
}

const StyledMapContainer = styled(MapContainer)`
  margin-top: 15rem;
  margin-bottom: 6rem;
  height: 70vh;
  width: 100%;
  @media (min-width: 500px) {
    width: 500px;
  }
`;
