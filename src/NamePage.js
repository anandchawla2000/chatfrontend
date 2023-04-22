import { useState } from "react";
import { useNavigate } from "react-router-dom";
import earth from "./earth-icon.png"
export const NamePage = () => {
  const [name, setname] = useState();
  const navigator =useNavigate()
  const enterChatPage = () => {
    navigator(`/chats/${name}`)
  };
  return (
    <>
      <div className="containerfluid namepg">
      <div className="nav tac">
            <h1>World Chat</h1>
          </div>
        <div className="mainbox">
          <div className="inputcontainer">
            <div className="tac image">
              <img src={earth} alt="world"></img>
            </div>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            ></input>
            <button type="button" onClick={enterChatPage}>Enter World Chat</button>
          </div>
        </div>
      </div>
    </>
  );
};
