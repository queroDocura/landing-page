// @ts-nocheck
import React, {useState} from 'react';

import {Container, Form} from './styles';

import NavBarComeback from '../../components/navbar-comeback';
import Input from '../../components/input';
import Textarea from '../../components/textarea';
import Button from '../../components/button';
import Footer from '../../components/footer';
import {firebaseDatabase} from '../../app/firebase-config';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleEmailSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone || !message)
      return alert('Preencha todos os campos corretamente');

    setLoading(true);

    const contactMsg = {
      name,
      email,
      phone,
      message,
    };

    try {
      await firebaseDatabase.collection('contacts').add(contactMsg);

      alert('Email enviado, logo mais iremos te responder!');
    } catch (err) {
      console.error(err);
      alert('Ops! houve algo');
    } finally {
      setLoading(false);
    }
  }

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
        <Form onSubmit={handleEmailSubmit}>
          <fieldset>
            <legend>Fale Conosco</legend>
            <Input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              label="Nome"
            />
            <Input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
            <Input
              type="text"
              value={phone}
              name="name"
              onChange={(e) => setPhone(e.target.value)}
              label="Whatsapp"
            />
            <Textarea
              name="email-content"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              label="Digite aqui sua mensagem"
            />
            <Button type="submit" loading={loading} name="Enviar" filled />
          </fieldset>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
