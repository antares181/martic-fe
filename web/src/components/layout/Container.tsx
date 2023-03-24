import styled from "styled-components";

interface SectionProps {
  odd?: boolean;
  noPadding?: boolean;
  image?: string;
}

export const MainContainer = styled.div<SectionProps>`
  padding: ${(props) => (props.noPadding ? "0px 20px" : "80px 20px")};
  background-color: ${(props) => (props.odd ? "#E8ECF3" : "white")};
  background-image: ${(props) =>
    props.image ? `url('/assets/${props.image}')` : "none"};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Section = styled.div<SectionProps>`
  width: ${(props) => (props.odd ? "100%" : "1200px")};
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
