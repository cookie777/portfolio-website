import Link from "next/link";
import styles from "@styles/post-list.module.scss"
import Image from "next/image";
import { useRouter } from 'next/router'

export default function PostList({ mainTitle, allPostsMeta, subFolder }) {
  const path = useRouter().asPath
  const currentPage = path == "/" ? styles.home : styles.else

  return (
    <div className={styles.container}>
      <div className={currentPage}>
        <h2>{mainTitle}</h2>
        <div></div>
        <div>
          {
            allPostsMeta.map(({ id, title, description, image }) => (
              <Link href={`/${subFolder}/${id}`} key={id}>
                <div className={styles.post}>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <img
                    src={image}
                    alt={`sample img`}
                  />
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </ div >

  )
}
// `${currentClass}`