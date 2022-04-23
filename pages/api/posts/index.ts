import { Post } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../lib/prisma";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const getPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

export const createPost = async (req: NextApiRequest) => {
  const {
    title,
    company,
    name,
    email,
    description,
    requiredSkills = [],
    recommendedSkills = [],
    url,
    deadline,
  } = req.body;

  const validatedDeadline = new Date(deadline);

  const newPost: Omit<
    Post,
    "id" | "createdAt" | "updatedAt" | "published" | "status"
  > = {
    title,
    company,
    name,
    email,
    description,
    requiredSkills,
    recommendedSkills,
    url,
    deadline: validatedDeadline,
  };

  try {
    const post = await prisma.post.create({ data: newPost });
    return { data: post };
  } catch (error) {
    return { error: "Some properties missing" };
  }
};

const handler = nc<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
  })
  .post(async (req, res) => {
    const newPost = await createPost(req);

    if (newPost.error) {
      return res.status(400).json(newPost);
    }

    res.status(201).json(newPost);
  });

export default handler;
