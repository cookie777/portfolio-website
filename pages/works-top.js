import { getAllPostsMetaOf } from "../lib/posts"

export default function WorksTop({allPostsMeta}) {
  return (
    <div>
        <ul>
          {allPostsMeta.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
    </div>
  )
}


export async function getStaticProps() {
  const allPostsMeta = getAllPostsMetaOf('works')
  return {
    props: {
      allPostsMeta
    }
  }
}
