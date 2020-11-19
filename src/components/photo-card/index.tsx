import React from 'react';

import {Container, Content} from './styles';

interface CardWithPhotoProps {
  $inverse?: boolean;
  title: string;
  desc: string;
  urlToRedirect: string;
  imgUrl: string;
  imgDesc: string;
}

const CardWithPhoto: React.FC<CardWithPhotoProps> = (props) => {
  const {$inverse, title, desc, urlToRedirect, imgUrl, imgDesc} = props;

  return (
    <a href={urlToRedirect}>
      <Container $inverse={$inverse}>
        <div>
          <img src={imgUrl} alt={imgDesc} />
        </div>
        <Content>
          <div>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
          <div>
            <strong>Ver mais</strong>
          </div>
        </Content>
      </Container>
    </a>
  );
};

export default CardWithPhoto;
