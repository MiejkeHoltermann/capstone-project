import styled from "styled-components";
import Image from "next/image";
import destinations from "@/db/destinations";
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
      <StyledSubtitle>Random Destinations</StyledSubtitle>
      <StyledCarousel
        naturalSlideWidth={500}
        naturalSlideHeight={180}
        totalSlides={5}
        visibleSlides={1}
      >
        <StyledButtonBack>
          <Image src="/arrowLeft.svg" fill alt="back to previous slide" />
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
                  width={800}
                  height={800}
                  alt={randomDestination.name}
                  id={randomDestination.name}
                />
              </StyledImageWrapper>
              <StyledTag>{randomDestination.name} </StyledTag>
            </StyledSlide>
          ))}
        </StyledSlider>
        <StyledButtonNext>
          <Image src="/arrowRight.svg" fill alt="go to next slide" />
        </StyledButtonNext>
      </StyledCarousel>
    </>
  );
}

const StyledSubtitle = styled.h2`
  color: teal;
  width: 90%;
  text-align: center;
  font-size: 1.4em;
  margin: 2rem 0 0.6rem 0;
`;

const StyledCarousel = styled(CarouselProvider)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.2rem;
  position: relative;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
`;

const StyledSlide = styled(Slide)`
  height: 20rem;
  width: 100%;
  position: relative;
`;

const StyledImageWrapper = styled.div`
  height: 16rem;
  width: 100%;
  margin: 0.8rem 0;
  position: relative;
`;

const StyledTag = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const buttonStyle = `width: 2rem;
height: 2rem;
position: absolute;
top: calc(50% - 1.5rem);
z-index: 1;
border: none;
background-color: transparent;
display: flex;
justify-content: flex-end;
align-items: center;
filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.6));
`;

const StyledButtonBack = styled(ButtonBack)`
  ${buttonStyle}
  left: 0.8rem;
`;
const StyledButtonNext = styled(ButtonNext)`
  ${buttonStyle}
  right: 0.8rem;
`;
