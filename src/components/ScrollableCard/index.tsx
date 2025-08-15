import { ReactNode } from "react"
import styles from "./scrollable-card.module.css"

interface Model {
  content: ReactNode
}

function ScrollableCard({
  model,
  className,
  isReversed = false,
}: {
  model: Model[]
  className: string
  isReversed?: boolean
}) {
  return (
    <ul
      className={`${styles.container} ${className} ${isReversed ? styles.reversed : ""}`}
    >
      {model.map(({ content }, idx) => (
        <li key={`sc-${idx}`}>{content}</li>
      ))}
    </ul>
  )
}

export default ScrollableCard
