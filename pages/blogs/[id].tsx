import { getAllPostIdsFrom, getSinglePostDataOf } from "@lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import PostContent from "@components/organism/PostContent";
import Layout from "@components/templates/Layout";
import Tail from "@components/molecule/Tail";
import { PostData, PostLikes } from "types";
import { fetchCurrentDomain } from "@lib/fetchDomain";
import useSWR from 'swr';

const subFolder = "blogs";
const fetcher:((url: RequestInfo) => Promise<PostLikes>) = async (url: RequestInfo) => fetch(url, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
}).then(r => r.json())


export default function Blogs({ ...postData }: PostData) {
  const headProps = {
    title: postData.title,
    description: postData.description,
    image: postData.image,
  };

  // Fetch api in client side. First res is undefined and later, it will be updated.
  const {data, error} = useSWR(`/api/post/likes?id=${postData.dbId}`, fetcher, {revalidateOnFocus: false,});
  if (data?.likes != undefined) {
    postData.likes = data.likes
  }
  

  return (
    <Layout {...headProps}>
      <PostContent {...postData} />
      <Tail message={`Blogs`} />
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
  // get post data
  const id = typeof params?.id === "string" ? (params?.id as string) : "";
  const postData = await getSinglePostDataOf(subFolder, id);

  return {
    props: {
      ...postData
    },
  };
};


    // // fetch "likes" from db
    // let likes: Number | null | undefined;
    // if (postData.dbId != undefined) {
    //   const res = await (await fetch(`${fetchCurrentDomain()}/api/post/likes?id=${postData.dbId}`)).json() as PostLikes;
    //   likes = res.likes;

    // check react fetch, then if x , only fetch swe