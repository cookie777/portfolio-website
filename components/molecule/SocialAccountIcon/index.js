import { container, text } from './style.module.scss'
import Image from 'next/image'

const SocialAccount = ({ path, name, account, link }) => {
  const iconSize = 64
  return (
    <div className={container}>
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
    </div>
  )
}

export default SocialAccount

