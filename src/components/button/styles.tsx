import styled, {keyframes} from 'styled-components';
import {Colors} from '../../app/style';

interface Button {
  filled: boolean;
  maxWidth?: string;
  letterColor?: string;
}

interface Loading {
  maxWidth?: string;
  whiteLoading?: boolean;
}

const SpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button<Button>`
  width: 100%;
  display: block;
  background-color: ${(props) =>
    !props.filled ? 'transparent' : props.color ? props.color : Colors.beige};
  border: ${(props) =>
    props.filled
      ? `2px solid transparent`
      : props.color
      ? `2px solid ${props.color}`
      : `2px solid ${Colors.beige}`};
  border-radius: 5px;
  color: ${(props) =>
    props.filled
      ? props.letterColor
        ? props.letterColor
        : 'white'
      : props.letterColor
      ? props.letterColor
      : 'white'};
  padding: 8px 15px;
  font-weight: normal;
  margin-bottom: 10px;
  max-width: ${(props) => (props.maxWidth !== '' ? props.maxWidth : 'none')};
`;

export const Loading = styled.div<Loading>`
  max-width: ${(props) => (props.maxWidth !== '' ? props.maxWidth : 'none')};
  width: 100%;
  min-width: 200px;
  height: 40px;
  background-color: ${(props) => (props.whiteLoading ? 'white' : Colors.green)};
  color: ${(props) => (props.whiteLoading ? Colors.beige : 'white')};
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    animation: ${SpinAnimation} 3s linear infinite;
  }
`;
