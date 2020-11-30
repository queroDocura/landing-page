import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {Container, Background, Navigation, CallToAction} from './styles';
import LogoWhiteBg from '../../assets/logo-white-bg.png';

import Button from '../button';

const NavbarLandingPage: React.FC = () => {
  return (
    <Container>
      <Background />
      <Navigation>
        <a href="https://calculadora.querodocuras.com.br">Calculadora</a>
        <a href="https://reviews.querodocuras.com.br">Reviews</a>
        <Link to="/">
          <img src={LogoWhiteBg} alt="Logo Quero Doçura" />
        </Link>
        <NavLink to="/quem-somos" activeClassName="selected">
          Quem somos
        </NavLink>
        <NavLink to="/contato" activeClassName="selected">
          Contato
        </NavLink>
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
