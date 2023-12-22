import { useState } from "react";

function MessageBoard() {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = [...todo, todoText];
    setTodo(newTodo);
  };
  console.log(todo);
  const deleteTodo = (todoIndex) => {
    const newTodo = [...todo];
    newTodo.splice(todoIndex, 1);
    setTodo(newTodo);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {todo.map((item, index) => (
        <div class="board" key={index}>
          <div className="message">
            <h1>{item}</h1>
            <button
              className="delete-button"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageBoard;
