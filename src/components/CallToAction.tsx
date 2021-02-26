import React from 'react';

import Image from 'next/image';

interface ICallToActionProps {
  title: string;
  spotlight: string;
  desc: string;
  btnName: string;
  urlToRedirect?: string;
  imgUrl: string;
  imgAlt: string;
}

const CallToAction: React.FC<ICallToActionProps> = (
  props: ICallToActionProps,
) => {
  const {
    title,
    spotlight,
    desc,
    btnName,
    urlToRedirect,
    imgUrl,
    imgAlt,
  } = props;

  return (
    <section className="text-center mb-4">
      <figure className="relative w-full h-96 mb-4">
        <Image src={imgUrl} alt={imgAlt} objectFit="cover" layout="fill" />
      </figure>
      <section className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl mb-4">
          {title} <strong>{spotlight}</strong>
        </h1>
        <p className="mb-4 text-lg">{desc}</p>
        <a
          className="inline-block w-full md:w-auto bg-primary p-3 rounded-md text-white duration-200 hover:opacity-50"
          href={urlToRedirect}>
          {btnName}
        </a>
      </section>
    </section>
  );
};

export default CallToAction;
