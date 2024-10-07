import { ReactNode, useCallback, useMemo, useState } from "react";
import styles from "./accordion.module.css";

type AccordionItem = {
  label: string;
  content: string | ReactNode;
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
  anchorElem?: (link: string, text: string) => ReactNode;
}) {
  const [radioTracker, setRadioTracker] = useState<string>("");

  const onInputClickUncheckRadio = useCallback(
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
          <AccordionSection
            label={accordianItem.label}
            isSingle={isSingle}
            value={idx}
            groupName={groupName}
            onInputClick={onInputClickUncheckRadio}
            content={accordianItem.content}
          />
        );
      }),
    [model, isSingle, groupName, onInputClickUncheckRadio]
  );

  return <div className={styles.accordion}>{renderedAccordions}</div>;
}

function AccordionSection({
  label,
  isSingle,
  value,
  groupName,
  onInputClick,
  content,
}: {
  label: string;
  isSingle: boolean;
  value: number;
  groupName: string;
  onInputClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  content: ReactNode;
}) {
  return (
    <div key={label} className={styles.tab}>
      <label>
        {label}
        <input
          type={isSingle ? "radio" : "checkbox"}
          value={value}
          name={groupName}
          onClick={isSingle ? onInputClick : undefined}
        />
      </label>
      <div className={styles.tab__content}>
        <p>{content}</p>
      </div>
    </div>
  );
}
