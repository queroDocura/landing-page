import styled from 'styled-components';
import {Devices} from '../../app/style';

export const Container = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media ${Devices.laptop} {
    justify-content: flex-start;
    height: 12rem;

    > div {
      flex: 0 0 33.33%;
    }
  }

  margin-bottom: 1rem;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border: none;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 4rem;
  }

  @media ${Devices.tablet} {
    > img {
      width: 10rem;
    }
  }
`;
