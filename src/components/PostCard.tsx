import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IPostCard {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
  inverse: boolean;
}

const PostCard: React.FC<IPostCard> = (props: IPostCard) => {
  const {id, imgUrl, title, desc, inverse} = props;

  const redirectLink = `/post/${id}`;

  return (
    <article
      className={`flex flex-col ${
        inverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } md:h-96`}>
      <figure className="h-auto md:w-96">
        <Link href={redirectLink} passHref>
          <a className="relative">
            <Image
              src={imgUrl || '/image-not-found.png'}
              alt={title}
              objectFit="cover"
              layout="responsive"
              width={500}
              height={500}
            />
          </a>
        </Link>
      </figure>
      <section className="md:w-96 p-8">
        <h2 className="line-clamp-2 text-2xl mb-2 font-bold">
          <Link href={redirectLink} passHref>
            <a>{title}</a>
          </Link>
        </h2>
        <p className="line-clamp-6 mb-2">
          <Link href={redirectLink} passHref>
            <a>{desc}</a>
          </Link>
        </p>
        <span className="block text-right font-bold text-primary">
          <Link href={redirectLink} passHref>
            <a>Ver Mais</a>
          </Link>
        </span>
      </section>
    </article>
  );
};

export default PostCard;
