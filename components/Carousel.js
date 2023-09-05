import Image from "next/image";
import destinations from "@/db/destinations";
import styled from "styled-components";
import { fillCarousel } from "@/components/utils";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Carousel() {
  const randomDestinations = fillCarousel(destinations);

  return (
    <>
      <StyledSubheading>Random Destinations</StyledSubheading>
      <StyledCarousel
        naturalSlideWidth={500}
        naturalSlideHeight={180}
        totalSlides={5}
        visibleSlides={1}
      >
        <StyledButtonBack>
          <Image src="/arrowBack.svg" height={30} width={30} alt="last slide" />
        </StyledButtonBack>
        <StyledSlider>
          {randomDestinations.map((randomDestination) => (
            <StyledSlide
              key={randomDestination.id}
              index={randomDestination.index}
            >
              <StyledImageWrapper>
                <StyledImage
                  src={randomDestination.image}
                  height={500}
                  width={500}
                  alt={randomDestination.name}
                  id={randomDestination.name}
                />
              </StyledImageWrapper>
              <StyledName>{randomDestination.name} </StyledName>
            </StyledSlide>
          ))}
        </StyledSlider>
        <StyledButtonNext>
          <Image src="/arrowNext.svg" height={30} width={30} alt="next slide" />
        </StyledButtonNext>
      </StyledCarousel>
    </>
  );
}

const StyledCarousel = styled(CarouselProvider)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const StyledSlider = styled(Slider)`
  width: 260px;
`;

const StyledSlide = styled(Slide)`
  height: 220px;
  width: 260px;
  margin: 1rem 0 0.6rem 0;
`;

const StyledImageWrapper = styled.div`
  height: 180px;
  width: 260px;
  margin: 1rem 0 0.6rem 0;
`;

const StyledImage = styled(Image)`
  border-radius: 0.6rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledSubheading = styled.h2`
  color: teal;
  font-size: 1.2em;
  margin: 3rem 0 1rem 0;
`;

const StyledName = styled.h4`
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const StyledButtonBack = styled(ButtonBack)`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledButtonNext = styled(ButtonNext)`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
