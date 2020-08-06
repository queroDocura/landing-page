import React from 'react';
import {Link} from 'react-router-dom';

import {Container, Background, Navigation, CallToAction} from './styles';
import LogoWhiteBg from '../../assets/logo-white-bg.png';

import Button from '../button';

const NavbarLandingPage: React.FC = () => {
  return (
    <Container>
      <Background />
      <Navigation>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/calculadora">Calculadora de doces</Link>
        <Link to="/blog">Blog</Link>
        <div>
          <img src={LogoWhiteBg} alt="Logo Quero Doçura" />
        </div>
        <Link to="/banco-de-dados">Banco de dados</Link>
        <Link to="/quem-somos">Quem somos</Link>
        <Link to="/contato">Contato</Link>
      </Navigation>
      <CallToAction>
        <div>
          <h1>O melhor portal de doces</h1>
        </div>
        <div>
          <img src={LogoWhiteBg} alt="Logo Quero Doçura" />
        </div>
        <div>
          <Button
            name="Acessar o Marketplace"
            type="button"
            loading={false}
            _onClick={() => alert('working')}
            filled
          />
        </div>
      </CallToAction>
    </Container>
  );
};

export default NavbarLandingPage;
