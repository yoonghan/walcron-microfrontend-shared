import { ReactNode } from "react";
import styles from "./scrollable-card.module.css";

interface Model {
  content: ReactNode;
}

function ScrollableCard({
  model,
  className,
}: {
  model: Model[];
  className: string;
}) {
  return (
    <ul className={`${styles.container} ${className}`}>
      {model.map(({ content }, idx) => (
        <li key={`sc-${idx}`}>{content}</li>
      ))}
    </ul>
  );
}

export default ScrollableCard;
