import SocialAccount from "../../molecule/SocialAccountIcon"
import { container, network } from './style.module.scss'

const Network = ({ title }) => {
  return (
    <div className={container}>
      {title}
      <div className={network}>
        {data.map((props) => {
          return (
            <SocialAccount {...props} key={props.name} /> // ... == unwrap {}
          )
        })}
      </div>
    </div>
  )
}

export default Network



const data = [
  {
    path: 'email',
    name: 'Email',
    account: 'takayuki.contact@gmail.com',
    prompt: 'Wanna get in touch? I\'d love to hear from you. If you send me email including your name and message, I\'m willing to reply!',
    link: 'mailto:takayuki.yamaguchi.contact@gmail.com'
  },
  {
    path: 'github',
    name: 'GitHub',
    account: 'cookie777',
    prompt: 'Wanna see my codes? Through my repositories, you\'ll see my great activities and collaboration with others!',
    link: 'https://github.com/cookie777'
  },
  {
    path: 'linkedin',
    name: 'LinkedIn',
    account: 'takayuki-yamaguchi',
    prompt: 'Wanna know more about my career and background? You can easily found my passionate history and activities. Any messages are welcome!',
    link: 'https://www.linkedin.com/in/takayuki-yamaguchi/'
  },
  {
    path: 'twitter',
    name: 'Twitter',
    account: '@Tak8_Dev',
    prompt: 'Wanna know my feelings? You\'ll see my attitudes toward dev and tech here. Any messages are welcome!',
    link: 'https://twitter.com/Tak8_Dev'
  },
]