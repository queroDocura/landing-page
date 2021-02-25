import React from 'react';
import Image from 'next/image';

import {firebaseDatabase} from '../app/firebase-config';

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
  return (
    <>
      <h1>Quero Doçuras - Server side rendering - v0.1</h1>
      {banners.map((banner) => (
        <Image
          key={banner.id}
          src={banner.url}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      ))}
    </>
  );
};

export async function getStaticProps(): Promise<{props: IProps}> {
  const res = await firebaseDatabase.collection('banners').get();

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
