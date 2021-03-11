import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="p-8">
      <Link href="/" passHref>
        <a>
          <figure className="block text-center mb-4">
            <Image
              src="/logo-white-bg.png"
              alt="Quero Doçuras"
              layout="fixed"
              width={300}
              height={300}
            />
          </figure>
          <h1 className="block text-3xl text-center mb-4">
            ⚠️ Ops! Parece que não achamos o que voce procurava 😞
          </h1>
          <span className="block text-center w-full">
            Clique aqui para voltar
          </span>
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
