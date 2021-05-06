import Link from 'next/link'

export default function Menu() {
  return (
    //Fix me! to make link component
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about-me">
          <a>About me</a>
        </Link>
      </div>
      <div>
        <Link href="/works-top">
          <a>Works</a>
        </Link>
      </div>
      <div>
        <Link href="/blogs-top">
          <a>Blogs</a>
        </Link>
      </div>
      <div>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  )
}