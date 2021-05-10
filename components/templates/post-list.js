import Link from "next/link";

export default function PostList({ allPostsMeta, subFolder }) {
  return (
    <ul>
      {allPostsMeta.map(({ id, date, title }) => (
        <Link href={`/${subFolder}/${id}`} key={id}>
          <li>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        </Link>
      ))}
    </ul>
  )
}