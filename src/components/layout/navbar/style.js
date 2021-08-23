import styled from "styled-components";
import variables from '../../../data/variables';

export const NavbarLogo = styled.div`
  a {
    color: ${variables.white};
    font-size: 2.3rem;
    font-family: "GT-Walsheim-Pro-Bold";
  }
  @media(max-width: ${variables.breakpointPhone}) {
    display: none
  }
`

export const NavbarElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.04fr;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  background: rgba(25, 28, 36, 0.55);
  width: 100%;
  @media(min-width: ${variables.breakpointLarge}) {
    padding-right: 136px;
    padding-left: 136px;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    text-align: center;
    width: 100%;
  }
`

export const NavbarList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-content: space-between;
  list-style: none;
  > li a {
    font-size: 1.2rem;
    color: ${variables.secondary};
    padding: .5rem .2rem;
    margin: 0 1rem;
    text-decoration: none;
    vertical-align: middle;
    > svg {
      width: 18px;
      margin-right: 5px;
    }
    span, 
    svg {
      vertical-align: middle;
    }
    @media(max-width: ${variables.breakpointPhone}) {
      font-size: 0.8rem;
    }
  }
`

