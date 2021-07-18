import Link from "next/link";
import { container, title, postContainer, post, moreLink } from "./style.module.scss"

export default function PostListHome({ pageTitle, pageSubTitle, allPostsMeta, subFolder }) {

  const maxPosts = 3

  return (
    <div className={container}>
      <div className={title}>
        <h3>{pageTitle}</h3>
        <em>{pageSubTitle}</em>
      </div>
      <div className={postContainer}>
        {
          allPostsMeta.slice(0, maxPosts).map(({ id, title, descriptionHtml, image }) => (
            <Link href={`/${subFolder}/${id}`} key={id}>
              <a className={post}>
                <div>
                  <h4>{title}</h4>
                  <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
                </div>
                <img
                  src={image}
                  als={title}
                />
              </a>
            </Link>
          ))
        }
      </div>
      {/* <Link href={`/${subFolder}`}>
        <a className={moreLink}>
          <h4>more ></h4>
        </a>
      </Link> */}
    </div>
  )
}