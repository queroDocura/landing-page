import styled from 'styled-components';
import {Colors, Devices} from '../../app/style';

export const Container = styled.section`
  width: 100vw;
  height: auto;
  box-sizing: border-box;
  padding: 10px 10px 2rem 10px;
  text-align: center;

  > h1 {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 25px 0;
  }

  > h1 > b {
    color: ${Colors.beige};
  }

  > p {
    margin: 25px 0;
  }

  > button {
    margin: 25px auto;
  }

  @media ${Devices.tablet} {
    min-height: 25rem;
    padding: 30px 25%;
  }
`;
