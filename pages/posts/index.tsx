import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";

import Layout from "../../components/Layout";

import { Post } from "../../types/posts/posts";

import styles from "../../styles/posts/posts.module.scss"

interface PostsProps {
    posts: Post[]
}

const Posts: React.FunctionComponent<PostsProps> = ({ posts }) => {
    return (
        <Layout title="Posts">
            <div className={styles.postsContainer}>
                {posts.map(post => {
                    return (
                        <div key={post.id} className={`${styles.post} card`}>
                            <p className={styles.postTitle}>{post.title}</p>
                            <p className={styles.postContent}>{post.body}</p>
                            <Link href={`/posts/${post.id}`}>
                                <a className={styles.readMoreLink}>Read More</a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const postsData: Post[] = await postsResponse.json();

  if (!postsData.length) {
    return {
      notFound: true,
    }
  }

  return {
      props: {
          posts: postsData
      }
  }
};

export default Posts;