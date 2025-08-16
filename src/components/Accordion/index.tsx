import { ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import styles from "./accordion.module.css"

type AccordionItem = {
  label: string
  content: string | ReactNode
}

type AccordionProps = AccordionItem[]

export default function Accordion({
  model,
  groupName,
  isSingle = true,
}: Readonly<{
  model: AccordionProps
  groupName: string
  isSingle?: boolean
}>) {
  const [radioTracker, setRadioTracker] = useState<string>("")

  const onInputClickUncheckRadio = useCallback(
    (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      const target = event.currentTarget
      if (radioTracker === target.value) {
        target.checked = false
        setRadioTracker("")
      } else {
        setRadioTracker(target.value)
      }
    },
    [radioTracker],
  )

  const renderedAccordions = useMemo(
    () =>
      model.map((accordianItem, idx) => {
        return (
          <AccordionSection
            key={accordianItem.label}
            label={accordianItem.label}
            isSingle={isSingle}
            value={idx}
            groupName={groupName}
            onInputClick={onInputClickUncheckRadio}
            content={accordianItem.content}
          />
        )
      }),
    [model, isSingle, groupName, onInputClickUncheckRadio],
  )

  return <div className={styles.accordion}>{renderedAccordions}</div>
}

function AccordionSection({
  label,
  isSingle,
  value,
  groupName,
  onInputClick,
  content,
}: Readonly<{
  label: string
  isSingle: boolean
  value: number
  groupName: string
  onInputClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  content: ReactNode
}>) {
  const [javascriptEnabled, setJavascriptEnabled] = useState(false)

  useEffect(() => {
    setJavascriptEnabled(true)
  }, [])

  const onDivKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === " " || event.key === "Enter") {
        const firstChild = event.currentTarget
          .firstElementChild as HTMLLabelElement
        if (firstChild !== null) {
          firstChild.click()
        }
      }
    },
    [],
  )

  return (
    <div
      className={`${styles.tab} ${javascriptEnabled ? styles.selectable : ""}`}
    >
      <button onKeyUp={onDivKeyUp} className={styles.no_button}>
        <label>
          {label}
          <input
            type={isSingle ? "radio" : "checkbox"}
            value={value}
            name={groupName}
            onClick={isSingle ? onInputClick : undefined}
          />
        </label>
      </button>
      <div className={styles.tab__content}>
        <div>{content}</div>
      </div>
    </div>
  )
}
