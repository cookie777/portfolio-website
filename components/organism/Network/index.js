import SocialAccount from "../../molecule/SocialAccountIcon"
import { container, network } from './style.module.scss'

const Network = () => {
  return (
    <div className={container}>
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
    account: 'l.oeil.ballon @gmail.com',
    prompt: 'Want to get in touch? I\'d love to hear from you. If you send me email including your name and message, I\'m willing to reply!',
    link: 'mailto:takayuki.yamaguchi@gmail.com'
  },
  {
    path: 'github',
    name: 'GitHub',
    account: 'cookie777',
    prompt: 'Want to see my codes? Thought repositories, you\'ll see my great activities and collaboration with others!',
    link: 'https://github.com/cookie777'
  },
  {
    path: 'linkedin',
    name: 'LinkedIn',
    account: 'takayuki-yamaguchi',
    prompt: 'Want to know more about my career and background? You can easily found my passionate history and activities. Of course, any messages is pleasure instead of sending an email!',
    link: 'https://www.linkedin.com/in/takayuki-yamaguchi/'
  },
  {
    path: 'twitter',
    name: 'Twitter',
    account: '@Tak8_Dev',
    prompt: 'Want to know my feelings? You\'ll get my attitude toward dev and tech. Of course, any messages is pleasure instead of sending an email!',
    link: 'https://twitter.com/Tak8_Dev'
  },
]