import styles from "./style.module.scss";

export default function SellingPoint() {
  return (
    <div className={styles.container}>
      <h1>My strength</h1>
      <ul>
        <DataList />
      </ul>
    </div>
  );
}

const DataList = () => {
  return (
    <>
      {data.map(({ title, description }) => {
        return (
          <li key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        );
      })}
    </>
  );
};

const data: Array<{ [name: string]: string }> = [
  {
    title: "Master degree of Computer Science",
    description:
      "Both bachelor and master degree of Computer Science. Have a solid knowledge for algorithms, data structure and how computer works.",
  },
  {
    title: "iOS Developer",
    description:
      "Working as an iOS developer currently. Familiar with OOP, design patters, and architectures",
  },
  {
    title: "UI Designer",
    description:
      "Have experiences for working as a UI designer several times with other developers. Familiar with Apple’s Human Interface Guidelines. ",
  },
];
