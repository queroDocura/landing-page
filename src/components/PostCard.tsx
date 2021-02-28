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

  return (
    <article
      className={`flex flex-col ${
        inverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } md:h-96`}>
      <figure className="h-auto md:w-96">
        <Link href={`/post/${id}`} passHref>
          <a className="relative">
            <Image
              src={imgUrl}
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
        <Link href={`/post/${id}`} passHref>
          <a>
            <h2 className="line-clamp-2 text-2xl mb-2 font-bold">{title}</h2>
          </a>
        </Link>
        <Link href={`/post/${id}`} passHref>
          <a>
            <p className="line-clamp-6 mb-2">{desc}</p>
          </a>
        </Link>
        <Link href={`/post/${id}`} passHref>
          <a>
            <span className="block text-right font-bold text-primary">
              Ver Mais
            </span>
          </a>
        </Link>
      </section>
    </article>
  );
};

export default PostCard;
