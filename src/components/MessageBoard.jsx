/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function MessageBoard() {
  // ch todoText-->messageInput
  const [messageInput, setMessageInput] = useState("");
  //ch todo-->messageList
  const [messageList, setMessageList] = useState([]);
  

  const handleMessageOnChange = (e) => {
    setMessageInput(e.target.value);
  };
  //update Array state
  //ch addTodo--->addMessage
  const addMessage = (e) => {
    e.preventDefault();
    const newMessageList = [...messageList]; //cloning Array state
    newMessageList.push(messageInput); //add newTodo by todoText:state at user input
    setMessageList(newMessageList); //Execute Fn setTodo in order to render(ArrayStateUpdate)
  };
  const removeMessage = (MessageListIndex) => {
    const newMessageList = [...messageList]; //clone
    newMessageList.splice(MessageListIndex, 1);
    setMessageList(newMessageList);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label htmlFor="todo-input">
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleMessageOnChange} //add text
            value={messageInput}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div className="board">
          {
            messageList.map((item, index) => {
              return (
                <>
                  <li className="message" key={index}>
                    {item}
                    <button
                      className="delete-button"
                      onClick={() => {
                        removeMessage(index);
                      }}
                    >
                      x
                    </button>
                  </li>
                </>
              );
          }
          )}
          


      </div>
    </div>
  );
}

export default MessageBoard;
