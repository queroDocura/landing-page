import styled from 'styled-components';
import {Devices} from '../../app/style';

const Header = styled.header`
  figure {
    width: 100%;
    max-height: 400px;
    height: 400px;
    margin-bottom: 2rem;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 5px;
    }
  }

  h1 {
    font-size: 2rem;
  }

  @media ${Devices.mobileL} {
    figure {
      max-width: calc(100vw - 10rem);
  }
`;

const Container = styled.article`
  max-width: 800px;
  width: 100%;
  padding: 3rem 2rem;
  margin: 0 auto;

  > p {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.8rem;
  }
`;

const AboutUsStyle = {
  Header,
  Container,
};

export default AboutUsStyle;
