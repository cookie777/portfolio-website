import { container, title } from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const SocialAccount = ({ path, name, account, link, prompt }) => {
  const iconSize = 48
  return (
    <Link href={link}>
      <a target="_blank" className={container}>
        <span>{account}</span>
        <div className={title}>
          <h2>{name}</h2>
          <img
            src={`/icons/social-account/${path}.svg`}
            alt={name}
            width={iconSize}
            height={iconSize}
          />
        </div>

        <p>{prompt}</p>
      </a>
    </Link >
  )
}

export default SocialAccount

