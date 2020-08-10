import styled from 'styled-components';
import {Devices} from '../../app/style';

export const Container = styled.nav`
  height: 4rem;
  display: flex;
  align-items: center;

  @media ${Devices.laptop} {
    height: 12rem;

    > div {
      flex: 0 0 33.33%;
    }
  }
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 1.5rem;
  background-color: transparent;
  border: none;

  > svg {
    margin: 0 0.2rem;
  }
`;

export const ImgContainer = styled.div`
  display: none;
  justify-content: center;

  > img {
    width: 10rem;
  }

  @media ${Devices.laptop} {
    display: flex;
  }
`;
