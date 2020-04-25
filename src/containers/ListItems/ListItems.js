import React, { useState } from "react";
import classes from "./ListItems.module.css";
import Items from "../../components/Items/Items";

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
  
  return (
    <div className={classes.ListItems}>
      <Items items={items} />
    </div>
  );
};
