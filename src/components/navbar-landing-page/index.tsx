import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {Container, Navigation} from './styles';
import LogoWhiteBg from '../../assets/logo-white-bg.png';

// import Button from '../button';

const NavbarLandingPage: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <a href="https://calculadora.querodocuras.com.br">Calculadora</a>
        <a href="https://receitas.querodocuras.com.br">Receitas</a>
        <Link className="img-container" to="/">
          <img src={LogoWhiteBg} alt="Logo Quero Doçura" />
        </Link>
        <a href="https://reviews.querodocuras.com.br">Reviews</a>
        <NavLink to="/quem-somos" activeClassName="selected">
          Quem somos
        </NavLink>
      </Navigation>
    </Container>
  );
};

export default NavbarLandingPage;
