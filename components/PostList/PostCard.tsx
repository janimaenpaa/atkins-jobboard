import React from "react";
import { Post } from "@prisma/client";
import Card from "../Card";
import SkillBar from "../SkillBar";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Card
      title={post.title}
      subtitle={`${post.company} - Published on ${format(post.updatedAt, "dd.MM.yyyy")}`}
    >
      <SkillBar
        required={post.requiredSkills}
        recommended={post.recommendedSkills}
      />
    </Card>
  );
};

export default PostCard;
