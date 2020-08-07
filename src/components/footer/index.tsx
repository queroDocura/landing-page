import React from 'react';
import {FaFacebook, FaWhatsapp, FaTwitter, FaInstagram} from 'react-icons/all';

import {Container} from './style';

function Footer() {
  return (
    <Container>
      <section>
        <h2>Contato</h2>
        <span>contato@email.com</span>
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
