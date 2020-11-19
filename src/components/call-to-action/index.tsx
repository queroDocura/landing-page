import React from 'react';

import {Container} from './styles';

import LinkButton from '../LinkButton';

interface CallToActionProps {
  title: string;
  spotlight: string;
  desc: string;
  btnName: string;
  btnFunction: () => void;
  btnFilled: boolean;
  urlToRedirect?: string;
}

const CallToAction: React.FC<CallToActionProps> = (props) => {
  const {title, spotlight, desc, btnName, btnFilled, urlToRedirect} = props;

  return (
    <Container>
      <h1>
        {title} <strong>{spotlight}</strong>
      </h1>
      <p>{desc}</p>
      <LinkButton
        href={urlToRedirect}
        name={btnName}
        $filled={btnFilled}
        $maxWidth="300px"
      />
    </Container>
  );
};

export default CallToAction;
