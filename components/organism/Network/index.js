import SocialAccount from "../../molecule/SocialAccountIcon"
import { container, network } from './style.module.scss'

const Network = () => {
  return (
    <div className={container}>
      <h2>Network</h2>
      <div className={network}>
        {data.map((props) => {
          return (
            <SocialAccount {...props} key={props.name} /> // ... == unwrap {}
          )
        })}
      </div>

    </div >
  )
}

export default Network



const data = [
  {
    path: 'github',
    name: 'GitHub',
    account: 'cookie777',
    link: 'https://github.com/cookie777'
  },
  {
    path: 'linkedin',
    name: 'LinkedIn',
    account: 'takayuki-yamaguchi',
    link: 'https://www.linkedin.com/in/takayuki-yamaguchi/'
  },
  {
    path: 'twitter',
    name: 'Twitter',
    account: '@Tak8_Dev',
    link: 'https://twitter.com/Tak8_Dev'
  },
]