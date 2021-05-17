import Image from 'next/image'
import Link from 'next/link'

export function NavigationBottomButton({ path, menuName }) {
  return (
    <div>
      <Link href={`/${path == "home" ? "" : path}`}>
        <a>
          <Image
            src={`/icons/${path}.svg`}
            alt={menuName}
            width={24}
            height={24}
          />
          <p>{menuName}</p>
        </a>
      </Link>

    </div>
  )
}