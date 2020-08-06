import React from 'react';

import NavbarLandingPage from '../../components/navbar-landing-page';
import ImageFullWidth from '../../components/image-fullwidth';
import CallToAction from '../../components/call-to-action';

function LandingPage() {
  return (
    <>
      <NavbarLandingPage />
      <ImageFullWidth
        url="https://picsum.photos/2000/3000?random=1"
        alt="Imagem Um"
      />
      <CallToAction
        title="Acesse nosso"
        spotlight="MarketPlace"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, ante eget gravida pulvinar, erat ligula mattis tortor, id mollis ex libero ac eros. Nulla finibus nulla eu mauris lacinia feugiat. Vestibulum efficitur, lacus id mollis semper, nunc turpis consequat felis, eget mattis dolor nulla eget turpis. Aliquam at augue suscipit, aliquet massa ut, consequat lorem. Quisque facilisis mi eu venenatis lobortis. Morbi molestie lacus quam, at sodales dui lacinia sed."
        btnName="Acessar o Marketplace"
        btnFunction={() => alert('marketplace')}
        btnFilled
      />
      <ImageFullWidth
        url="https://picsum.photos/2000/3000?random=2"
        alt="Imagem Dois"
      />
      <CallToAction
        title="Conheça tambem nossa"
        spotlight="Base de Dados"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, ante eget gravida pulvinar, erat ligula mattis tortor, id mollis ex libero ac eros. Nulla finibus nulla eu mauris lacinia feugiat. Vestibulum efficitur, lacus id mollis semper, nunc turpis consequat felis, eget mattis dolor nulla eget turpis. Aliquam at augue suscipit, aliquet massa ut, consequat lorem. Quisque facilisis mi eu venenatis lobortis. Morbi molestie lacus quam, at sodales dui lacinia sed."
        btnName="Acessar a base de dados"
        btnFunction={() => alert('base de dados')}
        btnFilled
      />
      <ImageFullWidth
        url="https://picsum.photos/2000/3000?random=3"
        alt="Imagem Tres"
      />
      <CallToAction
        title="Vai fazer uma festa? Use nossa"
        spotlight="Calculadora de Doces"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, ante eget gravida pulvinar, erat ligula mattis tortor, id mollis ex libero ac eros. Nulla finibus nulla eu mauris lacinia feugiat. Vestibulum efficitur, lacus id mollis semper, nunc turpis consequat felis, eget mattis dolor nulla eget turpis. Aliquam at augue suscipit, aliquet massa ut, consequat lorem. Quisque facilisis mi eu venenatis lobortis. Morbi molestie lacus quam, at sodales dui lacinia sed."
        btnName="Acessar a Calculadora de Doces"
        btnFunction={() => alert('Calculadora de Doces')}
        btnFilled
      />
    </>
  );
}

export default LandingPage;
