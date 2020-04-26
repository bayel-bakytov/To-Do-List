import React, { useState, useEffect } from "react";
import classes from "./ListItems.module.css";
import Items from "../../components/Items/Items";
import NewItem from "../../components/NewItem/NewItem";
import axios from "../../axios";
import Loading from "../../components/UI/Loading/Loading";

export default () => {
  const [items, setItems] = useState(null);

  function deleteItem(id) {
    const newItems = { ...items };
    delete newItems[id];
    setItems(newItems);
  }

  function toggleCompleteItem(id) {
    const newItems = { ...items };
    newItems[id].completed = !newItems[id].completed;
    setItems(newItems);
  }

  function addItem(text) {
    const newItems = { ...items };
    const id = `todo-$(Math.floor(Math.random() * 10000))`;
    newItems[id] = {
      text: text,
      completed: false,
    };
    setItems(newItems);
  }
  useEffect(() => {
    axios.get("/items.json").then((response) => setItems({ ...response.data }));
  }, []);

  const itemsOutput = <Loading />;
  if (items !== null) {
    itemsOutput = (
      <Items
        items={items}
        deleteItem={deleteItem}
        toggleCompleteItem={toggleCompleteItem}
      />
    );
  }

  return (
    <div className={classes.ListItems}>
      <NewItem addItem={addItem} />
      {itemsOutput}
    </div>
  );
};
