import styled from 'styled-components';

import {Colors, Devices} from '../../app/style';

export const Container = styled.header`
  width: 100vw;
  height: 6rem;
  position: relative;

  > div {
    text-align: center;
  }

  @media ${Devices.tablet} {
    height: auto;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  height: 6rem;
  box-sizing: border-box;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  > .img-container {
    display: block;
  }

  > .img-container > img {
    width: 4rem;
  }

  > a {
    display: none;
  }

  @media ${Devices.tablet} {
    display: flex;
    height: 12rem;
    padding: 30px 0;

    > .img-container {
      width: auto;
    }

    > .img-container > img {
      width: 10rem;
    }

    > a {
      width: 165px;
      text-align: center;
      display: block;
      font-size: 1rem;
    }

    > .selected {
      color: ${Colors.beige};
      font-weight: 800;
    }
  }

  @media ${Devices.laptopL} {
    > a {
      font-size: 1.5rem;
    }
  }
`;
