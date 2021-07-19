import Link from 'next/link'
import { container } from './style.module.scss'

export default function MoreLink({ path }) {
  return (
    <Link href={`/${path}`}>
      <a className={container}>
        <h4>more ></h4>
      </a>
    </Link>

  )
}