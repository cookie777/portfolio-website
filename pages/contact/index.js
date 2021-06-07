import Tail from "@components/molecule/Tail";
import Message from "@components/organism/Message";
import Layout from "@components/templates/Layout";
import Network from "../../components/organism/Network";
import { container, title } from './style.module.scss';


export default function Contact() {
  return (
    <Layout>
      <div className={container}>
        <div className={title}>
          <h1>
            Contact
          </h1>
          <h3>
            Networks.
          </h3>

        </div>
        <div></div>
        <div>
          <Network />
        </div>
      </div>
      <Tail message={`Feel free to chat!`} />
    </Layout>
  )
}