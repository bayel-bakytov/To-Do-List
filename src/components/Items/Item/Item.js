import React from "react";
import classes from "./Item.module.css";
import Button from "../../UI/Button/Button";

export default ({ item, deleteItem, toggleCompleteItem }) => {
  const itemClasses = [
    classes.Item,
    item.completed ? classes.completed : null,
  ].join(" ");
  return (
    <li className={itemClasses}>
      <span className={classes.text} onClick={toggleCompleteItem}>
        {item.text}
      </span>
      <Button click={deleteItem} red>
        x
      </Button>
    </li>
  );
};
