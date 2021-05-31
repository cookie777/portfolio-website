import Message from "@components/organism/Message";
import Layout from "@components/templates/Layout";
import Network from "../../components/organism/Network";
import { container } from './style.module.scss';


export default function Contact() {
  return (
    <Layout>
      <div className={container}>
        <h1>Contact</h1>
        <div></div>
        <div>
          <Network />
          <Message />
        </div>

      </div>

    </Layout>
  )
}