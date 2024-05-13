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
            label: "Radio 1",
            content: "First content",
          },
          {
            label: "Radio 2",
            content: "Second content",
          },
        ]}
        groupName="test1"
        isSingle={true}
      ></Accordion>
    </>
  );
}
