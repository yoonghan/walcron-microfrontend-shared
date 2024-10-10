import { ReactNode } from "react";
import styles from "./scrollable-card.module.css";

interface Model {
  content: ReactNode;
}

function ScrollableCard({ model }: { model: Model[] }) {
  return (
    <ul className={styles.container}>
      {model.map(({ content }, idx) => (
        <li key={`sc-${idx}`}>{content}</li>
      ))}
    </ul>
  );
}

export default ScrollableCard;
