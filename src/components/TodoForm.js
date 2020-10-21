import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  // setting state and initializing input to an empty string unless editting
  // then add value to input
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  // setting input to whatever value is being typed
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // method when clicking "add todo" button
  const handleSubmit = (e) => {
    // prevents page from refreshing when you click submit
    e.preventDefault();

    // props so we can access from todoList component
    // id generator is to reduce chances of matching ids
    // text is set to value of input
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    // set input to an empty string after it has been clicked
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
