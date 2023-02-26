import React, { useState } from "react";
import classes from './ToDolistItem.module.css';

const ToDoListItems = (prpos) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
    return(
        <li className={classes}>
            <input type="checkbox" onClick={handleCheckboxChange}></input>
            <h3 className={isChecked && classes.action}>{prpos.title}</h3>
            <button className={classes.button}>Delete</button>
        </li>
    )
}

export default ToDoListItems;