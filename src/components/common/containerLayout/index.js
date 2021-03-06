import styled from 'styled-components';
import variables from "../../../data/variables";

export const ContainerLayout = styled.div`
  padding: 1.4rem 7px 0px 7px;
  {/* width: ${variables.width}; */}
  margin-left: auto;
  margin-right: auto;

  &.wrapper {
    max-width: ${variables.wrapperWidth};
    margin: auto;
  }
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    max-width: 75rem;
  }
  
`