import styled from "styled-components";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const DynamicMapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const DynamicTileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const DynamicMarker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const DynamicAttributionControl = dynamic(
  () => import("react-leaflet").then((module) => module.AttributionControl),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const DynamicL = dynamic(() => import("leaflet").then((module) => module.L), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function MapView() {
  const customIcon = new DynamicL.Icon({
    iconUrl: "map-marker.svg",
    iconSize: [50, 50],
  });
  return (
    <>
      <Header />
      <StyledHeading1>Itinerary</StyledHeading1>
      <ToggleButton href="/itinerary">
        <ToggleButtonImage
          src="/list.svg"
          height={40}
          width={40}
          alt="list view"
        />
      </ToggleButton>
      <StyledMapContainer center={[31.95, 35.933]} zoom={6}>
        <DynamicAttributionControl position="topright" />
        <DynamicTileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DynamicMarker position={[31.95, 35.933]}></DynamicMarker>
      </StyledMapContainer>
      <StyledFooter>
        <StyledLink href="/">Home</StyledLink>
      </StyledFooter>
    </>
  );
}

const StyledHeading1 = styled.h1`
  margin: 0;
  position: fixed;
  text-align: center;
  top: 10rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const ToggleButton = styled(Link)`
  background-color: yellow;
  position: fixed;
  top: 11rem;
  right: 4rem;
  z-index: 1;
  background-color: teal;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleButtonImage = styled(Image)`
  width: 1.6rem;
  height: 1.6rem;
`;

const StyledMapContainer = styled(DynamicMapContainer)`
  margin-top: 15rem;
  margin-bottom: 6rem;
  height: 70vh;
  width: 100%;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background-color: white;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 2rem;
  color: white;
  text-decoration: none;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;
