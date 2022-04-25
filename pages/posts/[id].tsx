import { Post } from "@prisma/client";
import React from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import SkillBar from "../../components/SkillBar";
import { prisma } from "../../lib/prisma";

type Props = {
  post: Post;
};

const PostPage = ({ post }: Props) => {
  console.log(post);
  return (
    <Container>
      <Card title={post.title} subtitle={post.company}>
        <SkillBar
          required={post.requiredSkills}
          recommended={post.recommendedSkills}
        />
        <p>{post.description}</p>
        <a href={post.url} target="_blank" rel="noreferrer">
          <div
            className={`bg-emerald-500 my-1 p-1 px-2 rounded-md text-center text-white font-semibold`}
          >
            Apply
          </div>
        </a>
      </Card>
    </Container>
  );
};

export async function getStaticPaths() {
  const posts = await prisma.post.findMany();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
  });
  return {
    props: { post },
  };
}

export default PostPage;
