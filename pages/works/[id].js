import { getAllPostIdsFrom, getSinglePostDataOf } from '../../lib/posts'

export default function Works({postData}) {
  return (
    <div>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData =  await getSinglePostDataOf('works', params.id, true)
  return {
    props: {
      postData
    }
  }
}