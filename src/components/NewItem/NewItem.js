import React from "react";
import classes from "./NewItem.module.css";
import Button from "../UI/Button/Button";

export default ({ addItem }) => {
  function addButtonClicked(event) {
    const input = event.target.previousSibling;

    addItem(input.value);
    input.value = "";
    input.focus();
  }
  function inputKeyDown({ key, target }) {
    if (key === "Enter") {
      addItem(target.value);
      target.value = "";
    }
  }
  return (
    <div className={classes.NewItem}>
      <input type="text" onKeyDown={inputKeyDown} />
      <Button click={addButtonClicked} green>
        Add
      </Button>
    </div>
  );
};
