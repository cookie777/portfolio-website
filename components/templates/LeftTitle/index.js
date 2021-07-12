
import { container, title, content } from './style.module.scss';

// Receive title group, content group
export default function LeftTitle({ titleSet, contents }) {
  return (
    <div className={container}>
      <div className={title}>
        <h1>
          {titleSet.main}
        </h1>
        <h3>
          {titleSet.sub}
        </h3>
      </div>
      <div className={content}>
        {contents}
      </div>
    </div>
  )
}