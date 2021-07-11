import Link from 'next/link';
import { container } from './style.module.scss'

const email = "l.oeil.ballon@gmail.com"

const Message = () => {
  return (
    <div className={`markdown`}>
      <h2>Feel free to chat!</h2>
      <ul>
        <li>
          <a href={`mailto: ${email}`}>
            {email}
          </a>
        </li>
      </ul>

    </div>
  )
}

export default Message;