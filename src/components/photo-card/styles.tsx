import styled from 'styled-components';
import {Colors, Devices} from '../../app/style';

interface PhotoCardProps {
  rowDirection?: string;
}

export const Container = styled.div<PhotoCardProps>`
  display: flex;
  width: 100%;
  height: auto;

  > div {
    flex: 0 0 100%;
    height: inherit;
    max-width: 100%;
  }

  > div:first-child {
    display: none;
  }

  > div > img {
    width: 100%;
    height: inherit;
    object-fit: cover;
  }

  @media ${Devices.tablet} {
    height: 25rem;
    flex-direction: ${(props) =>
      props.rowDirection !== '' ? props.rowDirection : 'row'};

    > div:first-child {
      display: block;
    }

    > div {
      flex: 0 0 50%;
      height: inherit;
      max-width: 50%;
    }
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  > div {
    flex: 0 0 100%;
    max-width: 100%;
  }

  > div:last-child {
    align-self: flex-end;
    text-align: end;
    margin: 10px 0;
  }

  > div > h1 {
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > div > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  > div > a {
    color: ${Colors.beige};
  }

  @media ${Devices.tablet} {
    text-align: left;

    > div > p {
      -webkit-line-clamp: 10;
    }
  }
`;
