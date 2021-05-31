import Message from "@components/organism/Message";
import Layout from "@components/templates/layout";
import Network from "../../components/organism/Network";
import { container } from './style.module.scss';


export default function Contact() {
  return (
    <Layout>
      <div className={container}>
        <h2>Contact</h2>
        <div></div>
        <div>
          <Network />
          <Message />
        </div>

      </div>

    </Layout>
  )
}