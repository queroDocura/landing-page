import React from 'react';

import {Container} from './styles';

interface ImageFullWidthBox {
  url: string;
  alt: string;
}

const ImageFullWidth: React.FC<ImageFullWidthBox> = (props) => {
  const {url, alt} = props;
  return (
    <Container>
      <img src={url} alt={alt} />
    </Container>
  );
};

export default ImageFullWidth;
