import styled from "styled-components";
import variables from '../../data/variables';

export const Title = styled.h2`
  font-size: 1.4rem;
  color: ${variables.secondary};
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1rem;
  }
`
export const SubText = styled.h2`
  font-size: 1.4rem;
  color: ${variables.secondary};
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1rem;
  }
`
