import "./code.css"
import ScrollableCard from "../../src/components/ScrollableCard"

export { Page }

const reversedCard = [
  {
    content: (
      <div style={{ backgroundColor: "orange", height: "100%" }}>
        My First card
      </div>
    ),
    id: "first",
  },

  {
    content: (
      <div style={{ backgroundColor: "blue", height: "100%" }}>
        My Second card
      </div>
    ),
    id: "second",
  },
  {
    content: (
      <div style={{ backgroundColor: "green", height: "100%" }}>
        My Third card
      </div>
    ),
    id: "third",
  },
  {
    content: (
      <div style={{ backgroundColor: "red", height: "100%" }}>
        My Fourth card
      </div>
    ),
    id: "fourth",
  },
]

function Page() {
  return (
    <>
      <h1>Scrollable Card</h1>
      <div>
        <strong>NOTE:</strong> If you need to override per-card, use --index
      </div>
      <ScrollableCard
        model={reversedCard}
        className="container"
        isReversed={true}
      />
      <div style={{ height: "100vh" }}>Footer</div>
    </>
  )
}
