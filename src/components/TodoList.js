import React, { useState } from "react";

import TodoForm from "./TodoForm";
import Todo from "./todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // method that creates todo and is passed into onSubmit function
  const addTodo = (todo) => {
    // this code ensures that any extra space will not show up in inputs
    // or if there is no text in the input at all
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // this will add new todo to list of todos that were spread out
    const newTodos = [todo, ...todos];

    // changes state to display all current todos
    setTodos(newTodos);
    // console.log(todo,...todos);
  };

  const updateTodo = (todoId, newValue) => {
    // this code ensures that any extra space will not show up in inputs
    // or if there is no text in the input at all
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // method that shows the todo completed
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      // this allows the user to toggle if the todo is completed or not
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  // method to delete todo item
  const removeTodo = (id) => {
    // spread out todo list and filter out the id that has been selected
    // then re render the list
    const removeTodoItem = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeTodoItem);
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
