import styled from 'styled-components';

import PatternWhite from '../../assets/pattern-white.png';
import {Colors, Devices} from '../../app/style';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  > div {
    text-align: center;
  }

  @media ${Devices.tablet} {
    height: auto;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  filter: sepia(60%) blur(1px) opacity(30%);
  background-image: url(${PatternWhite});

  @media ${Devices.tablet} {
    display: none;
    //height: 12rem;
  }
`;

export const Navigation = styled.nav`
  display: none;
  height: 12rem;
  box-sizing: border-box;
  padding: 30px;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  > div > img {
    width: 10rem;
  }

  > a {
    font-size: 1.2rem;
    margin: 0 25px;
  }

  > .selected {
    color: ${Colors.beige};
    font-weight: 800;
  }

  @media ${Devices.tablet} {
    display: flex;
  }

  @media ${Devices.desktopL} {
    > a {
      font-size: 1.5rem;
    }
  }
`;

export const CallToAction = styled.div`
  position: absolute;
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 100%;
  }

  > div:last-child {
    display: flex;
    align-items: flex-end;
  }

  > div > img {
    width: 15rem;
  }

  > div > h1 {
    font-weight: 600;
  }

  @media ${Devices.tablet} {
    display: none;
  }
`;
