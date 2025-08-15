import "./code.css"
import ScrollableCard from "../../src/components/ScrollableCard"
import React from "react"

export { Page }

const cards = [
  {
    content: (
      <div style={{ backgroundColor: "orange", height: "100%" }}>
        My First card
      </div>
    ),
  },

  {
    content: (
      <div style={{ backgroundColor: "blue", height: "100%" }}>
        My Second card
      </div>
    ),
  },
  {
    content: (
      <div style={{ backgroundColor: "green", height: "100%" }}>
        My Third card
      </div>
    ),
  },
  {
    content: (
      <div style={{ backgroundColor: "red", height: "100%" }}>
        My Fourth card
      </div>
    ),
  },
]

function Page() {
  return (
    <>
      <h1>Scrollable Card</h1>
      <div>
        <strong>NOTE:</strong> If you need to override per-card, use --index
      </div>
      <ScrollableCard model={cards} className="container" />
      <div style={{ height: "100vh" }}>Footer</div>
    </>
  )
}
