import { ReactNode, useCallback, useMemo, useState } from "react";
import styles from "./accordion.module.css";
import { htmlConvertor } from "../util/htmlConvertor";

type AccordionItem = {
  label: string;
  content: string;
};

type AccordionProps = AccordionItem[];

export default function Accordion({
  model,
  groupName,
  isSingle = true,
  anchorElem = (link, text) => <a href={link}>{text}</a>,
}: {
  model: AccordionProps;
  groupName: string;
  isSingle?: boolean;
  anchorElem?: (link: string, text: string) => ReactNode;
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
              <p>{htmlConvertor(accordianItem.content, anchorElem)}</p>
            </div>
          </div>
        );
      }),
    [model, isSingle, groupName, onInputClick, anchorElem]
  );

  return <div className={styles.accordion}>{renderedAccordions}</div>;
}
