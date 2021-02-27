import React from 'react';

import {firebaseDatabase} from '../app/firebase-config';

import Navbar from '../components/Navbar';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

interface IBanners {
  lastUpdate?: Date;
  systemTarget: string;
  typeCTA: string;
  url: string;
  id: string;
}

interface IProps {
  banners: Array<IBanners>;
}

const Home: React.FC<IProps> = ({banners}: IProps) => {
  function searchBanners(param: string) {
    const banner = banners.filter((obj) => obj.typeCTA === param);

    return banner[0]?.url;
  }

  return (
    <>
      <Navbar />
      <CallToAction
        title="Vai fazer uma festa? Use nossa"
        spotlight="Calculadora de Doces"
        desc="Não sabe a quantidade certa para encomendar? Use nossa calculadora e receba uma sugestão de quantos doces você pode precisar. Além disso, te passamos algumas dicas, tudo para te ajudar a montar seu evento."
        btnName="Acessar a Calculadora de Doces"
        urlToRedirect="https://calculadora.querodocuras.com.br"
        imgUrl={searchBanners('cd')}
        imgAlt="Calculadora de doces"
      />
      <CallToAction
        title="Gosta de se arriscar na cozinha? Aprenda um montão de"
        spotlight="Receitas"
        desc="Reunimos aqui uma série de receitas que não precisam nem de muitos utensílios nem experiência. Ideal para quem curte cozinhar por prazer! E caso queira sugerir alguma doçura, podemos testar para você."
        btnName="Achar uma receita"
        urlToRedirect="/receitas"
        imgUrl={searchBanners('rt')}
        imgAlt="Receitas"
      />
      <CallToAction
        title="Não sabe qual doce escolher? Veja e se delicie com os nossos"
        spotlight="Reviews"
        desc="Quer saber quais os melhores doces e doceiros do mercado? Está na dúvida de qual encomendar, ou qual sabor é o mais gostoso? Aqui tem uma excelente seleção, com fotos e descrições, te levando direto às melhores opções. Entre e aproveite!"
        btnName="Ver Reviews"
        urlToRedirect="/reviews"
        imgUrl={searchBanners('db')}
        imgAlt="Reviews"
      />
      <Footer />
    </>
  );
};

export async function getStaticProps(): Promise<{props: IProps}> {
  const res = await firebaseDatabase
    .collection('banners')
    .where('systemTarget', '==', 'landing-page')
    .get();

  const banners: Array<IBanners> = res.docs.map((doc) => {
    const obj = doc.data() as IBanners;

    obj.id = doc.id;
    delete obj.lastUpdate;

    return obj;
  });

  return {
    props: {
      banners,
    },
  };
}

export default Home;
