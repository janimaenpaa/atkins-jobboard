import { Post } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import Container from "../../components/Container";
import PostTable from "../../components/PostTable";

type Props = {
  posts: Post[];
};

const Admin = ({ posts }: Props) => {
  return (
    <Container>
      <PostTable posts={posts} />
    </Container>
  );
};

export async function getServerSideProps() {
  const posts = await prisma.post.findMany();
  return {
    props: { posts },
  };
}

export default Admin;
