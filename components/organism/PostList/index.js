import Link from "next/link";
import { container, post } from "./style.module.scss"

export default function PostList({ allPostsMeta, subFolder }) {

  return (
    <div className={container}>
      {
        allPostsMeta.map(({ id, title, description, image }) => (
          <Link href={`/${subFolder}/${id}`} key={id}>
            <a className={post}>
              <div>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <img
                src={image}
                alt={title}
              />
            </a>
          </Link>
        ))
      }
    </ div >
  )
}