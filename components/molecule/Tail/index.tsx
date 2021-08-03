import style from './style.module.scss'

export default function Tail({message} : {message: string}) {
  return (
    <div className={style.container}>
      <h3>{message}</h3>
      <div className={style.line}></div>
    </div>
  )
}