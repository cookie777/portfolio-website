import Link from "next/link"

export function NavigationTopButton({ path, menuName }) {
  return (
    <Link href={`/${path}`}>
      <a className={menuName}>{menuName}</a>
    </Link>
  )
}