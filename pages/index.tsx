import { getAllPostsMetaOf, getSinglePostDataOf } from "@lib/posts";

import styles from "./style.module.scss";
import SellingPoint from "@components/molecule/SellingPoint";
import PostListHome from "@components/organism/PostListHome";
import Layout from "@components/templates/Layout";
import Network from "@components/organism/Network";
import { ResumeHome } from "@components/organism/ResumeHome";
import { PageMeta, PostData, PostMeta } from "types";

interface HomeContents {
  aboutMePostData: PostData;
  workPostsMeta: PostMeta[];
  blogPostsMeta: PostMeta[];
}

export default function Home({
  aboutMePostData,
  workPostsMeta,
  blogPostsMeta,
}: HomeContents) {
  const headProps: PageMeta = {
    title: null,
    description: null,
    image: null,
  };

  return (
    <Layout {...headProps}>
      <div className={styles.grid}>
        <div>
          <SellingPoint />
          <ResumeHome {...aboutMePostData} />
          <Network title={<h2>Contact</h2>} />
        </div>
        <div>
          <PostListHome
            pageTitle={`Works`}
            pageSubTitle={`Experiences`}
            allPostsMeta={workPostsMeta}
            subFolder={`works`}
          />
          <PostListHome
            pageTitle={`Blog posts`}
            pageSubTitle={`Notes`}
            allPostsMeta={blogPostsMeta}
            subFolder={`blogs`}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const aboutMePostData = await getSinglePostDataOf(`common`, `about-me`);
  const workPostsMeta = await getAllPostsMetaOf(`works`);
  const blogPostsMeta = await getAllPostsMetaOf(`blogs`);

  return {
    props: {
      aboutMePostData,
      workPostsMeta,
      blogPostsMeta,
    },
  };
}
