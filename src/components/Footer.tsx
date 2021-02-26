import React from 'react';

import Image from 'next/image';

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
        <a href="asda" className="block m-4">
          analuiza@querodocuras.com.br
        </a>
        <a href="whatsapp" className="block m-4">
          +55 21 9 9606 8831
        </a>
      </div>
      <div className="w-full mt-4">
        <span>© Copyrigth 2020 Quero Doçuras</span>
      </div>
    </footer>
  );
};

export default Footer;
