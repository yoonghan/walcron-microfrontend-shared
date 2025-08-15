import { ReactNode, useState } from "react"
import styles from "./Announcement.module.css"

export type AnnouncementsType = (string | ReactNode)[]

export default function Announcement({
  ariaAnnouncementTitle,
  announcements,
  classes = "",
}: {
  ariaAnnouncementTitle: string
  announcements: AnnouncementsType
  classes?: string
}) {
  const [idx, setIdx] = useState(0)

  const goPrev = () => setIdx(idx - 1 >= 0 ? idx - 1 : announcements.length - 1)

  const goNext = () => setIdx(announcements.length > idx + 1 ? idx + 1 : 0)

  const hasOnly1Announcement = announcements.length === 1

  return announcements.length < 1 ? null : (
    <div
      role="status"
      title={ariaAnnouncementTitle}
      className={`${styles.announcement} ${hasOnly1Announcement ? styles.only_one : ""} ${classes}`}
    >
      {!hasOnly1Announcement && (
        <button
          onClick={goPrev}
          className={`${styles.button} ${styles.button_prev}`}
        >
          <i aria-label="previous announcement"></i>
        </button>
      )}
      <p>{announcements[idx]}</p>
      {!hasOnly1Announcement && (
        <button onClick={goNext} className={styles.button}>
          <i aria-label="next announcement"></i>
        </button>
      )}
      <label className={styles.close} aria-label="Close Announcement">
        <input type="checkbox" />
      </label>
    </div>
  )
}
