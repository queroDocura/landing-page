import React from 'react';
import {Link} from 'react-router-dom';

import {Container, Content} from './styles';

interface CardWithPhotoProps {
  rowDirection?: string;
  title: string;
  desc: string;
  urlToRedirect: string;
  imgUrl: string;
  imgDesc: string;
}

const CardWithPhoto: React.FC<CardWithPhotoProps> = (props) => {
  const {rowDirection, title, desc, urlToRedirect, imgUrl, imgDesc} = props;

  return (
    <Container rowDirection={rowDirection}>
      <div>
        <img src={imgUrl} alt={imgDesc} />
      </div>
      <Content>
        <div>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div>
          <Link to={urlToRedirect}>
            <b>Ver mais</b>
          </Link>
        </div>
      </Content>
    </Container>
  );
};

export default CardWithPhoto;
