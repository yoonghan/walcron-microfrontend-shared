import { ReactNode } from "react"
import styles from "./scrollable-card.module.css"

interface Model {
  content: ReactNode
  id: string
}

function ScrollableCard({
  model,
  className,
  isReversed = false,
}: Readonly<{
  model: Model[]
  className: string
  isReversed?: boolean
}>) {
  return (
    <ul
      className={`${styles.container} ${className} ${isReversed ? styles.reversed : ""}`}
    >
      {model.map(({ content, id }, idx) => (
        <li key={`sc-${idx}-${id}`}>{content}</li>
      ))}
    </ul>
  )
}

export default ScrollableCard
