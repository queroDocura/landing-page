import React from 'react';
import {NavLink} from 'react-router-dom';
import {IoIosArrowRoundBack} from 'react-icons/all';

import {Container, Background, Navigation, CallToAction} from './styles';
import LogoWhiteBg from '../../assets/logo-white-bg.png';

import Button from '../button';

const NavbarLandingPage: React.FC = () => {
  return (
    <Container>
      <Background />
      <Navigation>
        <NavLink to="/marketplace" activeClassName="selected">
          Marketplace
        </NavLink>
        <NavLink to="/calculadora" activeClassName="selected">
          Calculadora de doces
        </NavLink>
        <NavLink to="/blog" activeClassName="selected">
          Blog
        </NavLink>
        <div>
          <img src={LogoWhiteBg} alt="Logo Quero Doçura" />
        </div>
        <NavLink to="/banco-de-dados" activeClassName="selected">
          Banco de dados
        </NavLink>
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
