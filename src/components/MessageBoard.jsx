import { useState } from "react";

function MessageBoard() {
  const [messageBoard, setMessageBoard] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handlerAddClick = (event) => {
    event.preventDefault();

    const newMessageBoard = [...messageBoard];
    newMessageBoard.push(inputMessage);
    setMessageBoard(newMessageBoard);
  };

  const addInputMessage = (event) => {
    setInputMessage(event.target.value);
  };

  const deleteMessage = (indexItem) => {
    const newTextBoard = [...messageBoard];
    newTextBoard.splice(indexItem, 1);
    setMessageBoard(newTextBoard);
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
            value={inputMessage}
            onChange={addInputMessage}
          />
        </label>
        <button className="submit-message-button" onClick={handlerAddClick}>
          Submit
        </button>
      </div>

      <div class="board">
        {messageBoard.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
