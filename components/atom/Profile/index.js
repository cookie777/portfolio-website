import { container } from './style.module.scss'

export default function Profile({ size }) {
  return (
    <div className={container}>
      <img src='/profile.webp' alt="profile" width={size} />
    </div>
  )
}