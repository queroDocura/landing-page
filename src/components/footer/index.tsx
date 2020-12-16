import React, {ReactElement} from 'react';
// import { MdMail } from 'react-icons/all';

// import { Link } from 'react-router-dom';

import {Container} from './style';
import LogoWhite from '../../assets/logo-white-bg.png';

function Footer(): ReactElement {
  return (
    <Container>
      <section>
        <a href="https://querodocuras.com.br/contato">
          <h2>Contato</h2>
          <span className="email-span">analuiza@querodocuras.com.br</span>
          <br />
          <span>+55 21 9 9606 8831</span>
          <br />
        </a>
      </section>

      <section className="logo-container">
        <img src={LogoWhite} alt="Quero Doçuras Logo" />
      </section>
      <section>
        <span>© Copyrigth 2020 Quero Doçuras</span>
      </section>
    </Container>
  );
}

export default Footer;
