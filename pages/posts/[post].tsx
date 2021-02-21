import React from "react";
import { GetServerSideProps } from "next";

import Layout from "../../components/Layout";

import { Post, Comment } from "../../types/posts/posts";

import styles from "../../styles/posts/posts.module.scss";

interface PostProps {
    post: Post,
    comments: Comment[]
};


const SinglePost: React.FunctionComponent<PostProps> = ({ post, comments }) => {
    return (
        <Layout title={post.title}>
            <div className={styles.singlePostContainer}>
                <h2 className={styles.singlePostHeading}>Post</h2>

                <div className={`${styles.singlePostContent} card`}>
                    <p className={styles.postTitle}>{post.title}</p>
                    <p className={styles.postContent}>{post.body}</p>
                </div>

                <div className={styles.singlePostComments}>
                    <h2 className={styles.singlePostHeading}>Comments</h2>

                    <div>
                        {comments.map(comment => {
                            return (
                                <div className={`${styles.commentContainer} card`} key={comment.id}>
                                    <div className={styles.commentInfo}>
                                        <div className={styles.userDetails}>
                                            <div className={styles.commentUserLogo} />
                                            <p className={styles.commentUserName}>{comment.name}</p>
                                        </div>
                                        
                                        <p className={styles.commentUserEmail}>{comment.email}</p>
                                    </div>

                                    <p className={styles.commentContent}>{comment.body}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.post}`);
    const postData: Post = await postResponse.json();

    const commentsResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
    const commentsData: Comment[] = await commentsResponse.json();

    const postComments: Comment[] = commentsData.filter(item => item.postId === Number(query.post));

    if (!Object.keys(postData).length) {
        return {
          notFound: true,
        }
    }

    return {
        props: {
            post: postData,
            comments: postComments
        }
    }
};

export default SinglePost;