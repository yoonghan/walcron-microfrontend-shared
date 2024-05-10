import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import { Announcement } from "./components";

function App() {
  const [testComponent, setTestComponent] = useState("");

  const switchToTest = (component: string) => () => {
    setTestComponent(component);
  };

  switch (testComponent) {
    case "":
      return (
        <div>
          <h1>A page for testing</h1>
          <pre>npm run storybook</pre>

          <h2>Components</h2>
          <ul>
            <li onClick={switchToTest("accordion")}>Accordion</li>
            <li onClick={switchToTest("announcement")}>Announcement</li>
          </ul>
        </div>
      );
    case "accordion":
      return (
        <>
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
    case "announcement":
      return (
        <Announcement
          ariaAnnouncementTitle="Announcement"
          announcements={["one announcement"]}
        />
      );
  }
}

export default App;
