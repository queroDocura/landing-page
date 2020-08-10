import React from 'react';
import {IoIosArrowRoundBack} from 'react-icons/all';
import {Link} from 'react-router-dom';

import {Container, BackButton, ImgContainer} from './styles';

import LogoWhite from '../../assets/logo-white-bg.png';

function NavBarComeback() {
  return (
    <Container>
      <div>
        <Link to="/">
          <BackButton>
            <IoIosArrowRoundBack size="2rem" />
            <span>Voltar</span>
          </BackButton>
        </Link>
      </div>
      <ImgContainer>
        <img src={LogoWhite} alt="Logo" />
      </ImgContainer>
    </Container>
  );
}

export default NavBarComeback;
