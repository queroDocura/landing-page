import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

interface UrlObject {
  auth?: string | null;
  hash?: string | null;
  host?: string | null;
  hostname?: string | null;
  href?: string | null;
  path?: string | null;
  pathname?: string | null;
  protocol?: string | null;
  search?: string | null;
  slashes?: boolean | null;
  port?: string | number | null;
}

type Url = string | UrlObject;
interface ICallToActionProps {
  title: string;
  spotlight: string;
  desc: string;
  btnName: string;
  urlToRedirect: Url;
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
        <Link href={urlToRedirect} passHref>
          <a className="inline-block w-full md:w-auto bg-primary p-3 rounded-md text-white duration-200 hover:opacity-50">
            {btnName}
          </a>
        </Link>
      </section>
    </section>
  );
};

export default CallToAction;
