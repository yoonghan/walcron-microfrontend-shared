import Accordion from "../../../src/components/Accordion";
import "../code.css";

export { Page };

function Page() {
  return (
    <>
      <h1>Accordion</h1>

      <Accordion
        model={[
          {
            label: "Checkbox 1",
            content: "Third content",
          },
          {
            label: "Checkbox 2",
            content: "Fourth content",
          },
        ]}
        groupName="test2"
        isSingle={false}
      ></Accordion>
    </>
  );
}
