import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

interface INavbar {
  showBackNavbar?: boolean;
}

const Navbar: React.FC<INavbar> = ({showBackNavbar = false}: INavbar) => {
  const {asPath} = useRouter();

  const isAboutUs = asPath === '/quem-somos';
  const isRecipes = asPath === '/receitas';
  const isReviews = asPath === '/reviews';

  return (
    <div className="relative max-w-full">
      <nav
        className={`h-24 text-center text-base md:h-48 lg:text-2xl justify-center items-center box-border px-8 bg-transparent ${
          showBackNavbar ? 'hidden md:flex' : 'flex'
        }`}>
        <a
          className="hidden md:block w-44 hover:opacity-50 duration-200"
          href="home">
          Calculadora
        </a>
        <Link href="/receitas" passHref>
          <a
            className={`hidden md:block w-44 hover:opacity-50 duration-200 ${
              isRecipes && 'text-primary font-bold'
            }`}>
            Receitas
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="w-44 flex justify-center items-center hover:opacity-50 duration-200">
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
        <Link href="/reviews" passHref>
          <a
            className={`hidden md:block w-44 hover:opacity-50 duration-200 ${
              isReviews && 'text-primary font-bold'
            }`}>
            Reviews
          </a>
        </Link>
        <Link href="/quem-somos" passHref>
          <a
            className={`hidden md:block w-44 hover:opacity-50 duration-200 ${
              isAboutUs && 'text-primary font-bold'
            }`}>
            Quem Somos
          </a>
        </Link>
      </nav>
      <nav
        className={`${
          showBackNavbar ? 'block md:hidden' : 'hidden'
        } flex justify-between items-center p-2`}>
        <div>
          <Link href="/">
            <a className="flex items-center" href="/">
              Voltar
            </a>
          </Link>
        </div>
        <div>
          <figure className="w-16 md:w-40">
            <Image
              src="/logo-white-bg.png"
              alt="Quero Doçuras"
              layout="responsive"
              width="100%"
              height="100%"
            />
          </figure>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
