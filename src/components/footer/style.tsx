import styled from 'styled-components';
import {Colors, Devices} from '../../app/style';

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 15rem;
  color: ${Colors.beige};

  > section {
    flex: 0 0 100%;
    text-align: center;
  }

  > section > h2 {
    visibility: hidden;
    margin-bottom: 20px;
  }

  > section > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > section > div > div {
    margin: 0 10px;
  }
  @media ${Devices.tablet} {
    > section {
      flex: 0 0 50%;
    }

    > section:last-child {
      flex: 0 0 100%;
    }

    > section > h2 {
      visibility: visible;
    }
  }
`;
