import { useCallback, useMemo, useState } from "react";
import styles from "./accordion.module.css";

type AccordionItem = {
  label: string;
  content: string;
};

type AccordionProps = AccordionItem[];

export default function Accordion({
  model,
  groupName,
  isSingle = true,
}: {
  model: AccordionProps;
  groupName: string;
  isSingle?: boolean;
}) {
  const [radioTracker, setRadioTracker] = useState<string>("");

  const onInputClick = useCallback(
    (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      const target = event.currentTarget;
      if (radioTracker === target.value) {
        target.checked = false;
        setRadioTracker("");
      } else {
        setRadioTracker(target.value);
      }
    },
    [radioTracker]
  );

  const renderedAccordions = useMemo(
    () =>
      model.map((accordianItem, idx) => {
        return (
          <div key={accordianItem.label} className={styles.tab}>
            <label>
              {accordianItem.label}
              <input
                type={isSingle ? "radio" : "checkbox"}
                value={idx}
                name={groupName}
                onClick={isSingle ? onInputClick : undefined}
              />
            </label>
            <div className={styles.tab__content}>
              <p>{accordianItem.content}</p>
            </div>
          </div>
        );
      }),
    [model, isSingle, groupName, onInputClick]
  );

  return <div className={styles.accordion}>{renderedAccordions}</div>;
}
