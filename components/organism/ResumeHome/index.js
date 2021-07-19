import MoreLink from '@components/atom/MoreLink';
import { container, desktopOn, desktopOff } from './style.module.scss';

export function ResumeHome(postData) {
  return (
    <div className={container}>
      <div>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.descriptionHtml }} />
        <div className={desktopOff}>
          <MoreLink path={'about'} />
        </div>
      </div>
      <div className={`markdown ${desktopOn}`}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div >
  )
}