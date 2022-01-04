import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

import {
  About,
  Blog,
  Contact,
  Header,
  Intro,
  Projects,
  Skills,
  Testimonials,
} from "../components";
import getPosts from "../utils/getPosts";
import { PostType } from "../types/PostType";

interface Props {
  Posts: [PostType];
}

const Home: React.FC<Props> = ({ Posts }) => {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="Avneesh, Agarwal, Avneesh Agarwal, web dev, blogger, content creator"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="https://www.avneesh.tech/rss.xml"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="h-[10vh]">
        <Header />
      </div>

      <main className="relative mb-10 ml-5">
        <Intro />
        <About />
        <Testimonials />
        <Projects />
        <Skills />
        <Blog Posts={Posts} />
        <Contact />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const Posts = await getPosts("avneesh0612");

  return {
    props: {
      Posts: Posts.publication.posts,
    },
    revalidate: 600,
  };
};
