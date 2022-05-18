import { Post } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import Container from "../../components/Container";
import PostTable from "../../components/PostTable";
import { validateToken } from "../../lib/auth";
import { redirect } from "next/dist/server/api-utils";

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

export async function getServerSideProps({ req }: any) {
  try {
    validateToken(req.cookies.ACCESS_TOKEN);
  } catch (error) {
    return { redirect: { permanent: false, destination: "/admin/login" } };
  }
  
  const posts = await prisma.post.findMany();
  return {
    props: { posts },
  };
}

export default Admin;
