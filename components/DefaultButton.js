import styled from "styled-components";
import { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function DefaultButton({ url, icon, $orange, children }) {
  return (
    <>
      <StyledOptionsLinkBorder $orange={$orange}>
        <StyledButton $orange={$orange}>
          <StyledLink href={`${url}`}>
            {icon ? (
              <Image
                src={`/${icon}.svg`}
                width={60}
                height={60}
                alt="itinerary"
              />
            ) : (
              <p>{children}</p>
            )}
          </StyledLink>
        </StyledButton>
      </StyledOptionsLinkBorder>
    </>
  );
}

const StyledOptionsLinkBorder = styled.div`
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $orange }) =>
    $orange
      ? css`
          width: 16rem;
          height: 5rem;
          background: linear-gradient(180deg, #ef8344 40%, #eda545 100%);
          &:hover {
            background: linear-gradient(180deg, #eda545 40%, #ef8344 100%);
          }
        `
      : css`
          width: 6.5rem;
          height: 6.5rem;
          background: linear-gradient(180deg, #006f7a 0%, #00938c 100%);
          &:hover {
            background: linear-gradient(180deg, #00938c 0%, #006f7a 100%);
          }
        `}
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  ${({ $orange }) =>
    $orange
      ? css`
          width: 15.2rem;
          height: 4.5rem;
          background: linear-gradient(180deg, #eda545 0%, #ef8344 60%);
          &:hover {
            background: linear-gradient(180deg, #ef8344 20%, #eda545 100%);
          }
        `
      : css`
          width: 6rem;
          height: 6rem;
          background: linear-gradient(180deg, #00938c 00%, #006f7a 100%);
          &:hover {
            background: linear-gradient(180deg, #006f7a 0%, #00938c 100%);
          }
        `}
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.4rem;
  text-decoration: none !important;
`;
