import { getSinglePostDataOf } from '../lib/posts'

export default function AboutMe({ postData }) {
  const { id, date, title } = postData
  return (
    <div>
        <ul>
            <li>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
        </ul>
    </div>
  )
}

export async function getStaticProps() {
  const postData = await getSinglePostDataOf('common','about-me')
  return {
    props: {
      postData
    }
  }
}
