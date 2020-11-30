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

  > .logo-container > img {
    width: 8rem;
  }
  > section > h2 {
    visibility: hidden;
    margin-bottom: 20px;
  }

  > section > span {
    line-height: 2.2rem;
  }

  > section > .email-span {
    visibility: hidden;
  }

  > section > .email-link {
    margin: 0.5rem 0;
    color: ${Colors.beige};
    display: flex;
    visibility: visible;
    align-items: center;
    justify-content: center;
  }

  > section > .email-link > svg {
    margin: 0 0.5rem;
  }

  > section > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > section > div > div {
    margin: 0 10px 2rem;
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

    > section > .email-span {
      visibility: visible;
    }

    > section > .email-link {
      visibility: hidden;
    }
  }
`;
