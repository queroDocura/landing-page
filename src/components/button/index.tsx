import React from 'react';
import {FaSpinner} from 'react-icons/fa';

import {Container, Loading} from './styles';

interface Props {
  name: string;
  _onClick?: () => void;
  filled: boolean;
  maxWidth?: string;
  loading?: boolean;
  whiteLoading?: boolean;
  color?: string;
  type: 'button' | 'reset' | 'submit';
  letterColor?: string;
}

const Button: React.FC<Props> = (props) => {
  const {
    name,
    _onClick,
    filled,
    maxWidth,
    loading,
    whiteLoading,
    color,
    type,
    letterColor,
  } = props;

  return loading ? (
    <Loading maxWidth={maxWidth} whiteLoading={whiteLoading}>
      <FaSpinner size="1.5rem" />
    </Loading>
  ) : (
    <Container
      type={type}
      filled={filled}
      color={color}
      letterColor={letterColor}
      maxWidth={maxWidth}
      onClick={_onClick}>
      {name}
    </Container>
  );
};

export default Button;
