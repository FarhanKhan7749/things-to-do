import React, { useState } from "react";
import classes from './Input.module.css';

const Input = (props) => {
    const [enteredTitle, setEnterdtitle] = useState('');

    const addTitleListHandler = (event)=>{
        setEnterdtitle(event.target.value)
    }

    const addListHnadler = (event) => {
        event.preventDefault();
        props.onAdd(enteredTitle)
        setEnterdtitle('');
    }
    return (
        <React.Fragment>
            <form className={classes.form} onSubmit={addListHnadler}>
                <label className={classes.label}>Add New Task</label>
                <input id="title" type="text" value={enteredTitle} className={classes.Input} onChange={addTitleListHandler}></input>
                <button type="submit" className={classes.Button} >Add Task</button>
            </form>
        </React.Fragment>
    )
}

export default Input;