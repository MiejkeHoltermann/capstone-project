import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import trips from "../db/trips";
import { uid } from "uid";
import { format } from "date-fns";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Itinerary({ sights }) {
  function createItinerary() {
    let firstDay = new Date(trips[1].startDate);
    let lastDay = new Date(trips[1].endDate);
    const datesArray = [];
    for (let i = firstDay; i <= lastDay; i.setDate(i.getDate() + 1)) {
      datesArray.push(new Date(i));
    }
    return datesArray;
  }

  const datesArray = createItinerary();

  return (
    <>
      <StyledImageWrapper>
        <StyledImage
          src="/countries/jordan.jpg"
          height={600}
          width={800}
          layout="responsive"
          alt="Travel Notebook"
        />
        <StyledLocation>Jordan</StyledLocation>
        <StyledDate>29/08/23 - 16/09/23</StyledDate>
      </StyledImageWrapper>
      <StyledHeading1>Itinerary</StyledHeading1>
      <StyledCarousel
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={10}
        visibleSlides={5}
      >
        <StyledPrevButton>
          <Image src="arrowBack.svg" width={20} height={20} alt="alt" />
        </StyledPrevButton>
        <StyledSlider>
          {sights
            .filter((sight) => sight.inItinerary === true)
            .map((sight) => (
              <Slide key={sight.id} index={sight.index}>
                <StyledImage2
                  src={sight.image}
                  height={40}
                  width={40}
                  alt={sight.name}
                />
              </Slide>
            ))}
        </StyledSlider>
        <StyledNextButton>
          <Image src="arrowNext.svg" width={20} height={20} alt="alt" />
        </StyledNextButton>
      </StyledCarousel>
      <StyledList>
        {datesArray.map((date) => (
          <li key={uid()}>{format(date, "dd/MM/yy")}</li>
        ))}
      </StyledList>
      <StyledLink href="/">Save</StyledLink>
    </>
  );
}

const StyledCarousel = styled(CarouselProvider)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 240px;
  height: 40px;
`;

const StyledPrevButton = styled(ButtonBack)`
  background-color: white;
  border: none;
  width: 2rem;
  height: 2rem;
`;

const StyledNextButton = styled(ButtonNext)`
  background-color: white;
  border: none;
  width: 2rem;
  height: 2rem;
`;

const StyledImage2 = styled(Image)`
  border-radius: 0.3rem;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  height: 10rem;
  width: 360px;
  overflow: clip;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const StyledLocation = styled.p`
  color: white;
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 2.8rem;
  left: 0;
  z-index: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
`;

const StyledDate = styled.p`
  color: white;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 5.4rem;
  left: 0;
  z-index: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
`;

const StyledHeading1 = styled.h1`
  margin-top: 8rem;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
  align-self: flex-start;
`;

const StyledLink = styled(Link)`
  border-radius: 2rem;
  color: white;
  text-decoration: none;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  margin-top: 2rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;
