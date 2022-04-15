import React, { Fragment } from "react";
import { Post } from "@prisma/client";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <Fragment>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Fragment>
  );
};

export default PostList;
