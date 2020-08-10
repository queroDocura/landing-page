import styled from 'styled-components';
import {Devices} from '../../app/style';

export const Container = styled.div`
  padding: 0 10px;

  @media ${Devices.tablet} {
    padding: 0 20rem;
  }
`;

export const Form = styled.form`
  margin-top: 1.4rem;
  > fieldset {
    border: none;
  }

  > fieldset legend {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
