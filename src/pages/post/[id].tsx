import React, {useEffect, useState} from 'react';
import * as dayjs from 'dayjs';
import {useRouter} from 'next/router';

import {firebaseDatabase} from '../../app/firebase-config';

import {Post as IPost} from '../../types/Posts';

import Navbar from '../../components/Navbar';

const Post: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;

  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    async function getPost() {
      const response = await firebaseDatabase.collection('post').doc(id).get();

      if (!response.exists) return;

      setPost(response.data());
    }

    getPost();
  }, [id]);

  useEffect(() => {
    const contentSection = document.getElementById('content');
    if (post?.content && contentSection)
      contentSection.innerHTML = post?.content;
  }, [post]);

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-2 mb-8">
        <article>
          <h1 className="text-3xl font-bold ">{post?.title}</h1>
          <span className="block mb-4">
            {dayjs(post?.createdAt).format('DD/MM/YYYY')}
          </span>
          <section>
            {post?.tags.map((tag) => (
              <span className="inline-block w-max p-1 bg-grey-300 rounded mr-2 mb-2">
                {tag}
              </span>
            ))}
          </section>
          <section id="content" />
        </article>
      </main>
    </>
  );
};

export default Post;
