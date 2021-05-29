import Link from "next/link"

export function NavBarTopButton({ path, menuName }) {
  return (
    <Link href={`/${path}`}>
      <a className={menuName}>{menuName}</a>
    </Link>
  )
}