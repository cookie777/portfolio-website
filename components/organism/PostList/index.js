import Link from "next/link";
import { container, post } from "./style.module.scss"

export default function PostList({ allPostsMeta, subFolder }) {

  return (
    <div className={container}>
      {
        allPostsMeta.map(({ id, title, date, descriptionHtml, image }) => (
          <Link href={`/${subFolder}/${id}`} key={id}>
            <a className={post}>
              <div>
                <em>{date}</em>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
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