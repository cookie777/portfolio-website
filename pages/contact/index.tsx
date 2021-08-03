import Tail from "@components/molecule/Tail";
import Layout from "@components/templates/Layout";
import LeftTitle from "@components/templates/LeftTitle";
import { PageMeta } from "types";
import Network from "../../components/organism/Network";

export default function Contact() {
  const headProps: PageMeta = {
    title: "Contact",
    description: null,
    image: null,
  };

  const props = {
    titleSet: {
      main: "Contact",
      sub: "Networks.",
    },
    contents: <Network title={null} />,
  };

  return (
    <Layout {...headProps}>
      <LeftTitle {...props} />
      <Tail message={`Feel free to chat!`} />
    </Layout>
  );
}
