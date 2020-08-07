import styled from 'styled-components';
import {Devices} from '../../app/style';

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: auto;
  padding: 10px;

  > h2 {
    font-weight: normal;
    text-align: center;
    margin-bottom: 30px;
  }

  @media ${Devices.tablet} {
    padding: 30px 20%;
  }
`;
