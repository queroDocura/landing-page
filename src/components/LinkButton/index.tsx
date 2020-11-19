// @ts-nocheck
import React, {ReactElement, AnchorHTMLAttributes} from 'react';
import LinkButtonContainer from './styles';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  $filled: boolean;
  $maxWidth?: string;
  $letterColor?: string;
  $color?: string;
}

const LinkButton: React.FC<IProps> = (props): ReactElement => {
  const {name, $filled, $maxWidth, $letterColor, $color, ...rest} = props;
  return (
    <LinkButtonContainer
      $filled={$filled}
      $letterColor={$letterColor}
      $maxWidth={$maxWidth}
      $color={$color}
      {...rest}>
      {name}
    </LinkButtonContainer>
  );
};

export default LinkButton;
