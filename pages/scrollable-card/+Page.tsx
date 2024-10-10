import ScrollableCard from "../../src/components/ScrollableCard";
import React from "react";

export { Page };

const cards = [
  {
    content: <div style={{ backgroundColor: "white" }}>My First card</div>,
  },

  {
    content: <div style={{ backgroundColor: "blue" }}>My Second card</div>,
  },
  {
    content: <div style={{ backgroundColor: "green" }}>My Third card</div>,
  },
  {
    content: <div style={{ backgroundColor: "red" }}>My Fourth card</div>,
  },
];

function Page() {
  return (
    <>
      <h1>Scrollable Card</h1>

      <ScrollableCard model={cards} />
    </>
  );
}
