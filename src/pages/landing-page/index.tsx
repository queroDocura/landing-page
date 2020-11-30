// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import {CardContainer} from './styles';
import {firebaseDatabase} from '../../app/firebase-config';

import NavbarLandingPage from '../../components/navbar-landing-page';
import ImageFullWidth from '../../components/image-fullwidth';
import CallToAction from '../../components/call-to-action';
import CardWithPhoto from '../../components/photo-card';
import Footer from '../../components/footer';

function LandingPage() {
  const [banners, setBanners] = useState([]);
  const [posts, setPosts] = useState([]);

  function searchBanners(param) {
    const banner = banners.filter((obj) => obj.typeCTA === param);

    return banner[0]?.url;
  }

  useEffect(() => {
    firebaseDatabase
      .collection('banners')
      .where('systemTarget', '==', 'landing-page')
      .get()
      .then((res) => {
        const arr = [];

        res.forEach((doc) => {
          const obj = doc.data();

          obj.id = doc.id;

          arr.push(obj);
        });

        setBanners(arr);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    firebaseDatabase
      .collection('posts')
      .limit(2)
      .get()
      .then((response) => {
        if (response.empty) return;

        const array = [];
        response.forEach((post) => {
          array.push({...post.data(), id: post.id});
        });

        setPosts(array);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Quero Doçuras</title>
      </Helmet>
      <NavbarLandingPage />
      {/* {window.innerWidth > 768 ? (
        <>
          <ImageFullWidth url={searchBanners('mp')} alt="Marketplace Banner" />
          <CallToAction
            title="Acesse nosso"
            spotlight="MarketPlace"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, ante eget gravida pulvinar, erat ligula mattis tortor, id mollis ex libero ac eros. Nulla finibus nulla eu mauris lacinia feugiat. Vestibulum efficitur, lacus id mollis semper, nunc turpis consequat felis, eget mattis dolor nulla eget turpis. Aliquam at augue suscipit, aliquet massa ut, consequat lorem. Quisque facilisis mi eu venenatis lobortis. Morbi molestie lacus quam, at sodales dui lacinia sed."
            btnName="Acessar o Marketplace"
            btnFunction={() => alert('marketplace')}
            btnFilled
          />
        </>
      ) : null} */}
      <ImageFullWidth
        url={searchBanners('cd')}
        alt="Calculadora de doces banner"
      />
      <CallToAction
        title="Vai fazer uma festa? Use nossa"
        spotlight="Calculadora de Doces"
        desc="Não sabe a quantidade certa para encomendar? Use nossa calculadora e receba uma sugestão de quantos doces você pode precisar. Além disso, te passamos algumas dicas, tudo para te ajudar a montar seu evento."
        btnName="Acessar a Calculadora de Doces"
        urlToRedirect="https://calculadora.querodocuras.com.br"
        btnFilled
      />
      <ImageFullWidth url={searchBanners('db')} alt="Reviews banner" />
      <CallToAction
        title="Não sabe qual doce escolher? Veja e se delicie com os nossos"
        spotlight="Reviews"
        desc="Quer saber quais os melhores doces e doceiros do mercado? Está na dúvida de qual encomendar, ou qual sabor é o mais gostoso? Aqui tem uma excelente seleção, com fotos e descrições, te levando direto às melhores opções. Entre e aproveite!"
        btnName="Ver Reviews"
        urlToRedirect="https://reviews.querodocuras.com.br"
        btnFilled
      />
      {posts.length !== 0 && (
        <CardContainer>
          <h2>Veja as últimas postagens</h2>
          {posts.map((post, index) => (
            <CardWithPhoto
              $inverse={index % 2 === 0}
              title={post.title}
              desc={post.content}
              urlToRedirect={`https://reviews.querodocuras.com.br/post/${post.id}`}
              imgUrl={post.pics[0]}
              imgDesc="Imagem do Card"
            />
          ))}
        </CardContainer>
      )}
      <Footer />
    </>
  );
}

export default LandingPage;
