
import { container, list } from './style.module.scss'

export default function Keywords({ keywords }) {
  const keyArr = keywords.split(',').map(w => w.trim())
  return (
    <div className={container}>
      <div className={list}>
        {keyArr.map((word, id) => (
          <span key={id}>{word}</span>
        ))}
      </div>
    </div >
  )
}