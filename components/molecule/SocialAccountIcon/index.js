import { container, title } from './style.module.scss'
import Link from 'next/link'

const SocialAccount = ({ path, name, account, link, prompt }) => {
  const iconSize = 48
  return (
    <div className={container}>
      <Link href={link}>
        <a target="_blank" >
          <div className={title}>
            <h3>{name}</h3>
            <img
              src={`/icons/social-account/${path}.svg`}
              alt={name}
              width={iconSize}
              height={iconSize}
            />
          </div>
          <span>{account}</span>
        </a>
      </Link >

      <p>{prompt}</p>
    </div>
  )
}

export default SocialAccount

