import styles from '@styles/selling-point.module.scss'

export default function SellingPoint() {
  return (
    <div className={styles.container}>
      <h1>
        My selling points.
      </h1>
      <ul>
        {
          data.map(({ title, description }) => {
            return (
              < li key={title}>
                <h3>
                  {title}
                </h3>
                <p>
                  {description}
                </p>
              </li>
            )
          })
        }
      </ul>

    </div >
  )
}

const data = [
  {
    title: 'Computer Science',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris in fusce arcu orci ornare. Egestas at orci morbi venenatis iaculis urna nec tempus arcu.'
  },
  {
    title: 'Designer skill',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris in fusce arcu orci ornare. Egestas at orci morbi venenatis iaculis urna nec tempus arcu.'
  },
  {
    title: 'Fast learner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris in fusce arcu orci ornare. Egestas at orci morbi venenatis iaculis urna nec tempus arcu.'
  },
]