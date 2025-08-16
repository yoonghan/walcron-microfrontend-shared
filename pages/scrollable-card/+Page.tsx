import "./code.css"
import ScrollableCard from "../../src/components/ScrollableCard"
export { Page }

const card = [
  {
    content: (
      <div style={{ backgroundColor: "green", height: "100%" }}>
        Reversed First card
      </div>
    ),
    id: "1st",
  },

  {
    content: (
      <div style={{ backgroundColor: "yellow", height: "100%" }}>
        Reversed Second card
      </div>
    ),
    id: "2nd",
  },
  {
    content: (
      <div style={{ backgroundColor: "white", height: "100%" }}>
        Reversed Third card
      </div>
    ),
    id: "3rd",
  },
]

function Page() {
  return (
    <>
      <h1>Scrollable Card</h1>
      <div>
        <strong>NOTE:</strong> If you need to override per-card, use --index
      </div>
      <ScrollableCard model={card} className="container" />
      <div style={{ height: "100vh" }}>Footer</div>
    </>
  )
}
