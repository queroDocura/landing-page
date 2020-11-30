import React from 'react';

import NavbarLandingPage from '../../components/navbar-landing-page';
import NavBarComeback from '../../components/navbar-comeback';
import Footer from '../../components/footer';

import Header from '../../assets/about-us-pic.jpg';

import AboutUsStyle from './styles';

const AboutUs = () => {
  return (
    <>
      {window.screen.width < 768 ? <NavBarComeback /> : <NavbarLandingPage />}

      <AboutUsStyle.Container>
        <AboutUsStyle.Header>
          <figure>
            <img src={Header} alt="Ana Luiza Britto" />
            <figcaption>Ana Luiza Britto</figcaption>
          </figure>
          <h1>Quem somos</h1>
        </AboutUsStyle.Header>
        <p>
          Desde criança, sou apaixonada por doces e sempre me aventurei na
          cozinha! Já pensei em trabalhar vendendo bolos inúmeras vezes mas
          sempre tinha algo que me impedia, aquele pensamento : talvez não seja
          essa a única forma de trabalhar com os doces que eu tanto amo... Sou
          arquiteta por formação, tenho meu próprio escritório de arquitetura,
          amo o que eu faço, mas sempre carrego ao lado minha paixão pela doce
          cozinha, não importa o que aconteça. Depois de anos provando inúmeros
          doces pelo querido Pote de Doçuras, conhecendo doceiros incríveis e
          esse doce universo, resolvi que estava na hora de botar a mão na
          massa. Mas de um jeito diferente! Começo então a trazer novidades para
          vocês, mas vem muito mais por aí!
        </p>
      </AboutUsStyle.Container>
      <Footer />
    </>
  );
};

export default AboutUs;
