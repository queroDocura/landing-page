import React from 'react';
import {FaFacebook, FaWhatsapp, FaTwitter, FaInstagram} from 'react-icons/all';
import {MdMail} from 'react-icons/all';
import {Link} from 'react-router-dom';

import {Container} from './style';

function Footer() {
  let currentUrl = window.location.href;

  return (
    <Container>
      <section>
        <h2>Contato</h2>
        <span className="email-span">comercial@email.com</span>
        <br />
        <span>+55 21 99999-9999</span>
        <br />
        {currentUrl.includes('contato') ? null : (
          <Link to="/contato" className="email-link">
            <MdMail size="1.5rem" />
            Fale Conosco
          </Link>
        )}
      </section>
      <section>
        <h2>Social</h2>
        <div>
          <div>
            <FaFacebook size="1.5rem" />
          </div>
          <div>
            <FaWhatsapp size="1.5rem" />
          </div>
          <div>
            <FaTwitter size="1.5rem" />
          </div>
          <div>
            <FaInstagram size="1.5rem" />
          </div>
        </div>
      </section>
      <section>
        <span>© Copyrigth 2020 Quero Doçuras</span>
      </section>
    </Container>
  );
}

export default Footer;
