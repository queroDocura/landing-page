import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>Quero Doçuras | Quem Somos</title>
      </Head>
      <Navbar showBackNavbar />
      <article className="max-w-3xl mx-auto p-4">
        <figure className="block">
          <Image
            src="/ana-britto.jpg"
            alt="Ana Luiza Britto"
            layout="responsive"
            objectFit="cover"
            width="48rem"
            height="24rem"
            className="block rounded-lg"
          />
          <figcaption className="block text-xs">Ana Luiza Britto</figcaption>
        </figure>
        <h1 className="font-medium text-3xl my-5">Quem Somos</h1>
        <p className="text-lg">
          Desde criança, sou apaixonada por doces e sempre me aventurei na
          cozinha! Já pensei em trabalhar vendendo bolos inúmeras vezes mas
          sempre tinha algo que me impedia, aquele pensamento : talvez não seja
          essa a única forma de trabalhar com os doces que eu tanto amo... Sou
          arquiteta por formação, tenho meu próprio escritório de arquitetura,
          amo o que eu faço, mas sempre carrego ao lado minha paixão pela doce
          cozinha, não importa o que aconteça. Depois de anos provando inúmeros
          doces pelo querido Pote de Doçuras, conhecendo doceiros incríveis e
          esse doce universo, resolvi que estava na hora de botar a mão na
          massa. Mas de um jeito diferente! Começo então a trazer novidades para
          vocês, mas vem muito mais por aí!
        </p>
      </article>
      <Footer />
    </>
  );
};

export default AboutUs;
