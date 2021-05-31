import { container, group, text } from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const SocialAccount = ({ path, name, account, link }) => {
  const iconSize = 48
  return (
    <Link href={link}>
      <a target="_blank" className={container}>
        <Image
          src={`/icons/social-account/${path}.svg`}
          alt={name}
          width={iconSize}
          height={iconSize}
        />

        <div className={text}>
          <h3>{name}</h3>
          <p>{account}</p>
        </div>
      </a>
    </Link >
  )
}

export default SocialAccount

