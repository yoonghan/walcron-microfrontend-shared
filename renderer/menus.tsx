import React from "react";
import { Link } from "./Link";

export { Menus };

function Menus() {
  return (
    <>
      <Link href="/menu">Menu</Link>
      <Link href="/minimenu">Mini Menu</Link>
      <Link href="/accordion/multiple">Accordion - Multiple</Link>
      <Link href="/accordion/single">Accordion - Single</Link>
      <Link href="/announcement">Announcement</Link>
      <Link href="/scrollable-card">Scrollable Card</Link>
      <Link href="/scrollable-card-reversed">Scrollable Card Reversed</Link>
    </>
  );
}
