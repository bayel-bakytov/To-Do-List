import React from "react";
import classes from "./Item.module.css";
import Button from "../../UI/Button/Button";

export default ({ item, deleteItem, toggleCompleteItem }) => {
  const itemClasses = [
    classes.Item,
    item.completed ? classes.completed : null,
  ].join(" ");

  function deleteButtonClick(event) {
    event.target.innerText = "Loading...";
    event.target.disabled = true;

    deleteItem();
  }
  return (
    <li className={itemClasses}>
      <span className={classes.text} onClick={toggleCompleteItem}>
        {item.text}
      </span>
      <Button click={deleteButtonClick} red>
        x
      </Button>
    </li>
  );
};
