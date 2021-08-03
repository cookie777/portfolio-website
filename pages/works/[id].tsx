import { getAllPostIdsFrom, getSinglePostDataOf } from "@lib/posts";
import PostContent from "@components/organism/PostContent";
import Layout from "@components/templates/Layout";
import Tail from "@components/molecule/Tail";
import { PostData } from "types";
import { GetStaticPaths, GetStaticProps } from "next";

const subFolder = "works";

export default function Works({ ...postData }: PostData) {
  const headProps = {
    title: postData.title,
    description: postData.description,
    image: postData.image,
  };

  return (
    <Layout {...headProps}>
      <PostContent {...postData} />
      <Tail message={`Works`} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIdsFrom(subFolder);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = typeof params?.id === "string" ? (params?.id as string) : "";

  const postData = await getSinglePostDataOf(subFolder, id);
  return {
    props: {
      ...postData,
    },
  };
};
