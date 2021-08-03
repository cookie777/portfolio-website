import { Resume } from "@components/organism/Resume";
import { getSinglePostDataOf } from "@lib/posts";
import Layout from "@components/templates/Layout";
import Tail from "@components/molecule/Tail";
import LeftTitle from "@components/templates/LeftTitle";
import { PostData, PageMeta } from "types";

export default function About({ ...postData }: PostData) {
  const headProps: PageMeta = {
    title: "About",
    description: null,
    image: null,
  };
  const props = {
    titleSet: {
      main: "About",
      sub: "Me.",
    },
    contents: <Resume {...postData} />,
  };

  return (
    <Layout {...headProps}>
      <LeftTitle {...props}></LeftTitle>
      <Tail message={`Resume`} />
    </Layout>
  );
}

export async function getStaticProps() {
  const postData = await getSinglePostDataOf(`common`, `about-me`);
  return {
    props: {
      ...postData,
    },
  };
}
