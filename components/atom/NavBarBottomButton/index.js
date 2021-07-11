import Image from 'next/image'
import Link from 'next/link'
import { container } from './style.module.scss'

export function NavBarBottomButton({ path, menuName }) {

  return (
    <Link href={`/${path == 'home' ? '' : path}`}>
      <a className={container}>
        <Image
          src={`/icons/navbar/${path}.svg`}
          alt={menuName}
          width={24}
          height={24}
        />
        <p>{menuName}</p>
      </a>
    </Link>

  )
}