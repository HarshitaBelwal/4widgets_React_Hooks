import React, { useState } from "react";

import Search from "./Search";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from './Header'

const items = [
  {
    title: "What is React",
    content: "React is a front end Javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

const options = [
  { label: "The color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "A shade of Blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}/>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

