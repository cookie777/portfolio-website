import { getAllPostIdsFrom, getSinglePostDataOf } from '../../lib/posts'

// import styles from '../../styles/works.module.scss'
import styles from './works.module.scss'

export default function Works({postData}) {

  return (
    <div className={styles.test}>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <p>test</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIdsFrom('works')
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData =  await getSinglePostDataOf('works', params.id)
  return {
    props: {
      postData
    }
  }
}