import React from "react";
import { Post, PostStatus } from "@prisma/client";
import Card from "../Card";
import SkillBar from "../SkillBar";
import { format } from "date-fns";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const isSponsored = post.status === PostStatus.SPONSORED;
  return (
    <Card
      title={post.title}
      titleHref={`/posts/${post.id}`}
      subtitle={`${post.company} - Published on ${format(
        post.updatedAt,
        "dd.MM.yyyy"
      )}`}
      sponsored={isSponsored}
    >
      <SkillBar
        required={post.requiredSkills}
        recommended={post.recommendedSkills}
      />
    </Card>
  );
};

export default PostCard;
