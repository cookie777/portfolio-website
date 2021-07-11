import styles from './style.module.scss'

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
    title: 'Master degree of Computer Science',
    description: 'Have a both bachelor and master degree of computer science. Have a solid knowledge for algorithm and how computer works.'
  },
  {
    title: 'iOS Developer',
    description: 'Experienced creating iOS apps. Familiar with OOP programming, design patters, and architectures'
  },
  {
    title: 'UI Designer skill',
    description: 'Experience working as a UI designer several times with other developers. Familiar with Apple’s Human Interface Guidelines. '
  },

]