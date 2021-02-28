import React from 'react';

import {firebaseDatabase} from '../app/firebase-config';

import {Post} from '../types/Posts';

import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

interface IProps {
  posts: Array<Post>;
}

const Recipes: React.FC<IProps> = (props: IProps) => {
  const {posts} = props;

  return (
    <>
      <Navbar />
      <BlogList
        data={posts}
        searchPlaceholder="Pesquisa uma receita..."
        subtitles="Veja as últimas receitas postadas"
      />
      <Footer />
    </>
  );
};

export async function getStaticProps(): Promise<{props: IProps}> {
  const res = await firebaseDatabase
    .collection('recipes')
    .orderBy('createdAt', 'desc')
    .limit(5)
    .get();

  const posts: Array<Post> = res.docs.map((doc) => {
    const obj = doc.data() as Post;

    obj.id = doc.id;
    obj.createdAt = +new Date(obj.createdAt);

    return obj;
  });

  return {
    props: {
      posts,
    },
  };
}

export default Recipes;
