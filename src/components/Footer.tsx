import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row md:flex-wrap mt-4 items-center h-60 text-primary text-center">
      <div className="w-full mb-4 md:mb-0 md:w-6/12 flex justify-center items-center">
        <Image
          src="/logo-white-bg.png"
          alt="Quero Doçuras"
          layout="fixed"
          width="130px"
          height="130px"
        />
      </div>
      <div className="w-full md:w-6/12">
        <h2 className="text-xl font-bold m-4">Contato</h2>
        <a
          href="mailto:quero.docuras@gmail.com"
          className="block m-4 duration-200 hover:opacity-50">
          analuiza@querodocuras.com.br
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/5521996068831?text=Ola%20vim%20do%20Quero%20Docuras"
          className="block m-4 duration-200 hover:opacity-50">
          +55 21 9 9606 8831
        </a>

        <Link href="/quem-somos">
          <a className="duration-200 hover:opacity-50">Quem Somos</a>
        </Link>
      </div>
      <div className="w-full mt-4">
        <span>© Copyrigth 2020 Quero Doçuras</span>
      </div>
    </footer>
  );
};

export default Footer;
