import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function DefaultLink({ url, icon, $style, children }) {
  return (
    <StyledBorder $style={$style}>
      <StyledLink href={`${url}`} $style={$style}>
        {icon ? (
          <StyledImage
            src={`/${icon}.svg`}
            width={60}
            height={60}
            alt={icon}
            $style={$style}
          />
        ) : (
          <p>{children}</p>
        )}
      </StyledLink>
    </StyledBorder>
  );
}

const StyledBorder = styled.div`
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $style }) =>
    $style === "orange"
      ? css`
          width: 15.2rem;
          height: 4.8rem;
          background: linear-gradient(
            180deg,
            var(--darkOrange) 40%,
            var(--lightOrange) 100%
          );
          &:hover {
            background: linear-gradient(
              180deg,
              var(--lightOrange) 40%,
              var(--darkOrange) 100%
            );
          }
        `
      : $style === "blue"
      ? css`
          width: 8rem;
          height: 3rem;
          border-radius: 5rem;
          background: linear-gradient(
            180deg,
            var(--darkBlue) 0%,
            var(--lightBlue) 100%
          );
          &:hover {
            background: linear-gradient(
              180deg,
              var(--lightBlue) 40%,
              var(--darkBlue) 100%
            );
          }
        `
      : $style === "round"
      ? css`
          width: 3.3rem;
          height: 3.3rem;
          position: fixed;
          top: 1.2rem;
          right: 1.4rem;
          border-radius: 50%;
          background: linear-gradient(
            180deg,
            var(--darkOrange) 60%,
            var(--lightOrange) 100%
          );
        `
      : css`
          width: 5.4rem;
          height: 5.4rem;
          background: linear-gradient(
            180deg,
            var(--lightTeal) 0%,
            var(--darkTeal) 100%
          );
          &:hover {
            background: linear-gradient(
              180deg,
              var(--darkTeal) 0%,
              var(--lightTeal) 100%
            );
          }
        `}
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  ${({ $style }) =>
    $style === "orange"
      ? css`
          font-size: 1.4rem;
          width: 14.6rem;
          height: 4.2rem;
          background: linear-gradient(
            180deg,
            var(--lightOrange) 0%,
            var(--darkOrange) 60%
          );
          &:hover {
            background: linear-gradient(
              180deg,
              var(--darkOrange) 20%,
              var(--lightOrange) 100%
            );
          }
        `
      : $style === "blue"
      ? css`
          width: 7.4rem;
          height: 2.4rem;
          border-radius: 5rem;
          background: linear-gradient(
            180deg,
            var(--lightBlue) 0%,
            var(--darkBlue) 100%
          );
          &:hover {
            background: linear-gradient(
              180deg,
              var(--darkBlue) 20%,
              var(--lightBlue) 100%
            );
          }
        `
      : $style === "round"
      ? css`
          width: 2.8rem;
          height: 2.8rem;
          border-radius: 50%;
          background: linear-gradient(
            180deg,
            var(--lightOrange) 0%,
            var(--darkOrange) 60%
          );
          position: fixed;
          top: 1.45rem;
          right: 1.65rem;
        `
      : css`
          width: 4.8rem;
          height: 4.8rem;
          background: linear-gradient(
            180deg,
            var(--darkTeal) 00%,
            var(--lightTeal) 100%
          );
          &:hover {
            background: linear-gradient(
              180deg,
              var(--lightTeal) 0%,
              var(--darkTeal) 100%
            );
          }
        `}
`;

const StyledImage = styled(Image)`
  ${({ $style }) =>
    $style === "round" &&
    css`
      width: 1.6rem;
      height: 1.6rem;
    `}
`;
