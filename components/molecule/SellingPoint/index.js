import styles from './style.module.scss'


export default function SellingPoint() {
  const DataList = () => {
    return (
      <>
        {data.map(({ title, description }) => {
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
      </>
    )
  }

  return (
    <div className={styles.container}>
      <h1>
        Why me?
      </h1>
      <ul>
        <DataList />
      </ul>

    </div >
  )
}

const data = [
  {
    title: 'Master degree of Computer Science',
    description: 'I have a both bachelor and master degree of Computer Science. I have a solid knowledge for algorithm and how computer works.'
  },
  {
    title: 'iOS Developer Experience',
    description: 'I have experienced publishing iOS apps. I\'m familiar with OOP programming, design patters, and architectures'
  },
  {
    title: 'UI Designer Experience',
    description: 'I have experienced working as a UI designer several times with other developers. I\'m familiar with Apple’s Human Interface Guidelines. '
  },

]