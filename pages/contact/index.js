import Tail from "@components/molecule/Tail";
import Layout from "@components/templates/Layout";
import LeftTitle from "@components/templates/LeftTitle";
import Network from "../../components/organism/Network";


export default function Contact() {
  const props = {
    titleSet: {
      main: "Contact",
      sub: "Networks."
    },
    contents: <Network />,
  }

  return (
    <Layout>
      <LeftTitle {...props} />
      <Tail message={`Feel free to chat!`} />
    </Layout>
  )
}