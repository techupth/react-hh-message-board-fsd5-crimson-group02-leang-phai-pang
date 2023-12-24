import { useState } from "react";

function MessageBoard() {
  // 1) // สร้าง State 2 อัน
  // 1.1) ข้อความของ Input (string) | Event: change
  // 2.2) Array ของข้อความ (["hi", "สวัสดี"]) | Event: click จากปุ่ม "submit"
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleAddMessageList = () => {
    // 5) เอาข้อความ messageInput ใส่ลงไปใน Array messageList
    // 5.1) เราต้อง clone ตัว array  messageList ก่อนไว้ใน variable อันใหม่
    const newMessageList = [...messageList];
    // 5.2) เราจะ push messageInput ใส่เข้าไปใน variable อันใหม่
    newMessageList.push(messageInput);
    // 5.3) update state
    setMessageList(newMessageList);
  };

  const handleRemoveMessage = (messageIndex) => {
    // 6)
    // messageList = ["hello", "hi", "🚀"]
    // ถ้าอยากจะลบ "hi" ออกจาก Array ต้องทำยังไงดี
    // 6.1) Clone array
    // 6.2) splice
    // messageList.splice(messageIndex, 1)
    // 6.3) update state
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          {/* 2) เก็บข้อมูลที่ผู้ใช้งานพิมพ์มาจาก Input ลงใน State */}
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
            value={messageInput}
          />
        </label>
        {/* 4) ทำให้ปุ่ม Submit คลิกแล้วเพิ่ม messageInput ลงใน Array messageList */}
        <button
          className="submit-message-button"
          onClick={handleAddMessageList}
        >
          Submit
        </button>
      </div>
      <div class="board">
        {/* 3) เอา messageList มา render ด้วย Array.map */}
        {messageList.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleRemoveMessage(index);
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
