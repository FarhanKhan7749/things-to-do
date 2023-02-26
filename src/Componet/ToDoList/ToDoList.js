import React from "react";
import classes from "./ToDoList.module.css"
import ToDoListItems from "./ToDoListItem";
const ToDoList = (props) =>{
    const listItem = props.list.map((item) => <ToDoListItems key={Math.random().toString}title={item.title} />)
    return(
        <ul className={classes.ul}>
            {listItem}
        </ul>
    )
};
export default ToDoList;