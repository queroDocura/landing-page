import React from 'react';

import {Container} from './styles';

import Button from '../button';

interface CallToActionProps {
  title: string;
  spotlight: string;
  desc: string;
  btnName: string;
  btnFunction: () => void;
  btnFilled: boolean;
}

const CallToAction: React.FC<CallToActionProps> = (props) => {
  const {title, spotlight, desc, btnName, btnFunction, btnFilled} = props;

  return (
    <Container>
      <h1>
        {title} <b>{spotlight}</b>
      </h1>
      <p>{desc}</p>
      <Button
        name={btnName}
        _onClick={btnFunction}
        filled={btnFilled}
        maxWidth="300px"
        type="button"
      />
    </Container>
  );
};

export default CallToAction;
