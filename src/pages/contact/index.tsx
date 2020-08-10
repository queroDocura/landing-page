import React from 'react';

import {Container, Form} from './styles';

import NavBarComeback from '../../components/navbar-comeback';
import Input from '../../components/input';
import Textarea from '../../components/textarea';
import Button from '../../components/button';
import Footer from '../../components/footer';

function Contact() {
  return (
    <>
      <NavBarComeback />
      <Container>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa
            justo, luctus eget leo a, blandit aliquam sem. Aenean non metus sed
            velit blandit hendrerit quis sed nibh. Quisque at auctor turpis. Nam
            aliquam ornare enim. Aliquam mauris tortor, varius maximus enim eu,
            interdum accumsan nunc.
          </p>
        </section>
        <Form>
          <fieldset>
            <legend>Fale Conosco</legend>
            <Input type="text" name="name" label="Nome" />
            <Input type="text" name="name" label="Email" />
            <Input type="text" name="name" label="Whatsapp" />
            <Textarea name="email-content" label="Digite aqui sua mensagem" />
            <Button
              type="submit"
              name="Enviar"
              _onClick={() => alert('working')}
              filled
            />
          </fieldset>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
