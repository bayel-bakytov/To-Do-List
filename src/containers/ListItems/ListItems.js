import React, { useState } from "react";
import classes from "./ListItems.module.css";

export default () => {
  const [items, setItems] = useState({
    "todo-1": {
      text: "hello world",
      completed: false,
    },
    "todo-2": {
      text: "bye world",
      completed: true,
    },
  });
  const itemsOutput = Object.keys(items).map((key) => {
    return (<li>{items[key].text}</li>);
  });
  return (
    <div className={classes.ListItems}>
      <ul>{itemsOutput}</ul>
    </div>
  );
};
