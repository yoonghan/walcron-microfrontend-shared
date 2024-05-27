import "./code.css";
import MiniMenu from "../../src/components/MiniMenu";

export { Page };

const navModel = [
  {
    hashId: "about",
    title: "About Us",
  },
  {
    hashId: "purpose",
    title: "Purpose",
  },
  {
    hashId: "objective",
    title: "Objective",
  },
  {
    hashId: "mission",
    title: "Mission",
  },
  {
    hashId: "faq",
    title: "Frequent Asked Questions",
  },
];

function Page() {
  return (
    <>
      <h1>MiniMenu</h1>

      <MiniMenu model={navModel} />

      {navModel.map((nav) => (
        <div
          className={nav.hashId === "mission" ? "container-2" : "container"}
          id={nav.hashId}
          key={nav.hashId}
        >
          <strong>Title: {nav.title}</strong>
          <p>Lorem Ipsum</p>
        </div>
      ))}
    </>
  );
}
