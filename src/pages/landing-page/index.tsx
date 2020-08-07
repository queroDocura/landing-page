import React from 'react';

import {CardContainer} from './styles';

import NavbarLandingPage from '../../components/navbar-landing-page';
import ImageFullWidth from '../../components/image-fullwidth';
import CallToAction from '../../components/call-to-action';
import CardWithPhoto from '../../components/photo-card';
import Footer from '../../components/footer';

function LandingPage() {
  return (
    <>
      <NavbarLandingPage />
      {window.innerWidth > 768 ? (
        <>
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
        </>
      ) : null}
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
      <CardContainer>
        <h2>Veja as últimas postagens do blog</h2>
        <CardWithPhoto
          rowDirection="row"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, ante eget gravida pulvinar, erat ligula mattis tortor, id mollis ex libero ac eros. Nulla finibus nulla eu mauris lacinia feugiat. Vestibulum efficitur, lacus id mollis semper, nunc turpis consequat felis, eget mattis dolor nulla eget turpis. Aliquam at augue suscipit, aliquet massa ut, consequat lorem. Quisque facilisis mi eu venenatis lobortis. Morbi molestie lacus quam, at sodales dui lacinia sed."
          urlToRedirect="/contato"
          imgUrl="https://picsum.photos/2000/3000?random=4"
          imgDesc="Imagem do Card"
        />
        <CardWithPhoto
          rowDirection="row-reverse"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, ante eget gravida pulvinar, erat ligula mattis tortor, id mollis ex libero ac eros. Nulla finibus nulla eu mauris lacinia feugiat. Vestibulum efficitur, lacus id mollis semper, nunc turpis consequat felis, eget mattis dolor nulla eget turpis. Aliquam at augue suscipit, aliquet massa ut, consequat lorem. Quisque facilisis mi eu venenatis lobortis. Morbi molestie lacus quam, at sodales dui lacinia sed."
          urlToRedirect="/contato"
          imgUrl="https://picsum.photos/2000/3000?random=5"
          imgDesc="Imagem do Card"
        />
      </CardContainer>
      <Footer />
    </>
  );
}

export default LandingPage;
