import { Post } from "@prisma/client";
import { format } from "date-fns";
import Link from "next/link";
import React, { Fragment } from "react";
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
    <Fragment>
      <Container>
        <Link href="/">
          <a className="flex w-full max-w-4xl">{"<-"} Back</a>
        </Link>
        <Card
          title={post.title}
          subtitle={`${post.company} | Published: ${format(
            post.createdAt,
            "dd.MM.yyyy"
          )} ${post.deadline ? ` | ${post.deadline}` : ""}`}
        >
          <SkillBar
            required={post.requiredSkills}
            recommended={post.recommendedSkills}
          />
          <p className="my-4">{post.description}</p>
          <a href={post.url} target="_blank" rel="noreferrer">
            <div
              className={`bg-emerald-500 my-1 p-1 px-2 rounded-md text-center text-white font-semibold`}
            >
              Apply
            </div>
          </a>
        </Card>
      </Container>
    </Fragment>
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
    select: {
      id: true,
      company: true,
      createdAt: true,
      deadline: true,
      description: true,
      published: true,
      requiredSkills: true,
      recommendedSkills: true,
      status: true,
      title: true,
      updatedAt: true,
      url: true,
    },
  });
  return {
    props: { post },
  };
}

export default PostPage;
