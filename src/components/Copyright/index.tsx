import styles from "./copyright.module.css";

type Props = {
  companyName?: string;
  link?: string;
  lastUpdatedYear: number;
};

const Wrapper = ({
  companyName = "Walcron",
  link = "/",
  lastUpdatedYear,
}: Props) => {
  return (
    <div className={styles.copyright}>
      {"Copyright © "}
      <a color="inherit" href={link}>
        {companyName}
      </a>{" "}
      {lastUpdatedYear}
      {"."}
    </div>
  );
};

export default Wrapper;
