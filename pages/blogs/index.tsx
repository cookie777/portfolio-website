import Tail from "@components/molecule/Tail";
import Layout from "@components/templates/Layout";
import PostList from "@components/organism/PostList";
import { getAllPostsMetaOf } from "@lib/posts";
import LeftTitle from "@components/templates/LeftTitle";
import { AllPostMeta, PageMeta } from "types";

const subFolder = "blogs";

export default function Blogs({ allPostsMeta }: AllPostMeta) {
  const headProps: PageMeta = {
    title: "Blogs",
    description: null,
    image: null,
  };
  const props = {
    titleSet: {
      main: "Blogs",
      sub: "Notes.",
    },
    contents: <PostList allPostsMeta={allPostsMeta} subFolder={subFolder} />,
  };

  return (
    <Layout {...headProps}>
      <LeftTitle {...props} />
      <Tail message={`${allPostsMeta.length} articles posted.`} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsMeta = await getAllPostsMetaOf(subFolder);
  return {
    props: {
      allPostsMeta,
    },
  };
}
