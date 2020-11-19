// @ts-nocheck
import styled from 'styled-components';
import {Colors} from '../../app/style';

interface IProps {
  $filled: boolean;
  $maxWidth?: string;
  $letterColor?: string;
  $color?: string;
}

const LinkButtonContainer = styled.a<IProps>`
  width: 100%;
  background-color: ${(props) =>
    !props.$filled
      ? 'transparent'
      : props.$color
      ? props.$color
      : Colors.beige};
  border: ${(props) =>
    props.$filled
      ? `2px solid transparent`
      : props.color
      ? `2px solid ${props.color}`
      : `2px solid ${Colors.beige}`};
  border-radius: 5px;
  color: ${(props) =>
    props.$filled
      ? props.$letterColor
        ? props.$letterColor
        : 'white'
      : props.$letterColor
      ? props.$letterColor
      : 'white'};
  padding: 8px 15px;
  font-weight: normal;
  margin-bottom: 10px;
  max-width: ${(props) => (props.$maxWidth !== '' ? props.$maxWidth : 'none')};
`;

export default LinkButtonContainer;
