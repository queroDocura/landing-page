import React from 'react';

import PostCard from './PostCard';

import {Post} from '../types/Posts';

interface IBlogList {
  searchPlaceholder: string;
  subtitles: string;
  data: Array<Post>;
}

const BlogList: React.FC<IBlogList> = (props: IBlogList) => {
  const {searchPlaceholder, subtitles, data} = props;
  return (
    <main className="max-w-3xl mx-auto mb-8">
      <section className="text-center mb-8 p-2">
        <input
          placeholder={searchPlaceholder}
          className="block border-black border-solid border p-2 rounded-md w-full mb-4"
          type="text"
        />
        <span className="block text-xl">{subtitles}</span>
      </section>
      <section>
        {data.map((post, index) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            desc={post.content}
            imgUrl={post.pics[0]}
            inverse={index % 2 === 0}
          />
        ))}
      </section>
    </main>
  );
};

export default BlogList;
