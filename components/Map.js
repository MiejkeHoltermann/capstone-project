import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map() {
  return (
    <StyledMapContainer center={[31.95, 35.933]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[31.95, 35.933]}></Marker>
    </StyledMapContainer>
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
