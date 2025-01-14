import React from "react";
import Hero from "./component/hero/page";
import InFeauture from "./component/inFeauture/page";
import Toppicks from "./component/topPicks/page";
import Display from "./component/display/page";
import Blog from "./component/blog/page";
import Insta from "./component/insta/page";

export default function Page() {
  return (
    <div>
      <title>Furnify</title>
      <Hero />
      <InFeauture />
      <Toppicks />
      <Display />
      <Blog />
      <Insta />
    </div>
  );
}
