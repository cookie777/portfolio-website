import { container, line } from './style.module.scss'

export default function Tail({ message }) {
  return (
    <div className={container}>
      <h3>{message}</h3>
      <div className={line}></div>
    </div>
  )
}