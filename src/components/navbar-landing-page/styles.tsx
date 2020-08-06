import styled from 'styled-components';

import PatternWhite from '../../assets/pattern-white.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  > div {
    text-align: center;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  filter: sepia(60%) blur(1px) opacity(30%);
  background-image: url(${PatternWhite});
`;

export const Navigation = styled.nav`
  display: none;
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
`;
