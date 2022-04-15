import React from "react";
import { Post } from "@prisma/client";
import Card from "../Card";
import SkillBar from "../SkillBar";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Card
      title={post.title}
      subtitle={`${post.company} - Published on ${post.updatedAt}`}
    >
      <SkillBar
        required={post.requiredSkills}
        recommended={post.recommendedSkills}
      />
    </Card>
  );
};

export default PostCard;
