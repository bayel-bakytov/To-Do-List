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

  function deleteItem(id) {
    const newItems = { ...items };
    delete newItems[id];
    setItems(newItems);
  }

  function toggleCompleteItem(id) {
    const newItems = { ...items };
    newItems[id].completed = !newItems[id].completed ;
    setItems(newItems);
  }

  return (
    <div className={classes.ListItems}>
      <Items
        items={items}
        deleteItem={deleteItem}
        toggleCompleteItem={toggleCompleteItem}
      />
    </div>
  );
};
