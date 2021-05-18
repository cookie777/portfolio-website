import Link from "next/link";
import styles from "@styles/post-list.module.scss"
import { useRouter } from 'next/router'

export default function PostList({ allPostsMeta, subFolder }) {
  const router = useRouter()
  return (
    <div>
      <h1 className={router.asPath == "/" ? styles.home : ""}>
        {/* <h1 className={styles.home}> */}
        {subFolder == "works" ? `Works` : "Blogs"}
      </h1>
      <ul>
        {allPostsMeta.map(({ id, title, description }) => (
          < Link href={`/${subFolder}/${id}`} key={id}>
            <li>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div >

  )
}