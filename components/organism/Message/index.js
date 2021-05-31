import Link from 'next/link';
import { container } from './style.module.scss'

const phone = "+1 236-982-9712"
const email = "l.oeil.ballon@gmail.com"

const Message = () => {
  return (
    <div className={`markdown`}>
      <h2>Feel free to chat!</h2>
      <ul>
        <li>
          <a href={`tel: ${phone}`} >
            {phone}
          </a>
        </li>
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