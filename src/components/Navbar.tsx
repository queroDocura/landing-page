import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Navbar: React.FC = () => {
  const {asPath} = useRouter();

  const isAboutUs = asPath === '/quem-somos';

  return (
    <div className="relative max-w-full">
      <nav className="flex h-24 text-center text-base md:h-48 lg:text-2xl justify-center items-center box-border px-8 bg-transparent">
        <a
          className="hidden md:block w-44 hover:opacity-50 duration-200"
          href="home">
          Calculadora
        </a>
        <a
          className="hidden md:block w-44 hover:opacity-50 duration-200"
          href="home">
          Receitas
        </a>
        <Link href="/">
          <a
            className="w-44 flex justify-center items-center hover:opacity-50 duration-200"
            href="home">
            <figure className="w-16 md:w-40">
              <Image
                src="/logo-white-bg.png"
                alt="Quero Doçuras"
                layout="responsive"
                width="100%"
                height="100%"
              />
            </figure>
          </a>
        </Link>
        <a
          className="hidden md:block w-44 hover:opacity-50 duration-200"
          href="home">
          Reviews
        </a>
        <Link href="/quem-somos">
          <a
            className={`hidden md:block w-44 hover:opacity-50 duration-200 ${
              isAboutUs && 'text-primary font-bold'
            }`}
            href="home">
            Quem Somos
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
