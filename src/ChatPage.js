import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { io } = require("socket.io-client");
// const socket = io("http://localhost:5000");
const socket =io(process.env.REACT_APP_BackendURL);
export const ChatPage = () => {
  const [msg, setmsg] = useState("");
  const [msginfo, setmsginfo] = useState([]);
  const { name } = useParams();
  socket.on("receive-message", (mssg) => {
    const msgdiv = (
      <div className="othermsg">
        <div className="msg">
          <p>{mssg}</p>
        </div>
      </div>
    );
    setmsginfo([...msginfo, msgdiv]);
  });
  const messagedalo = (owner) => {
    if (owner == "owner") {
      const msgdiv = (
        <div className="ownermsg">
          <div className="msg">
            <p>{msg}</p>
          </div>
        </div>
      );
      setmsginfo([...msginfo, msgdiv]);
      setmsg("");
    }
    socket.emit("send-message", msg);
  };
  function connectkro() {
    console.log(name);
    socket.emit("new-user-joined", name);
  }
  useEffect(() => {
    connectkro();
  }, []);
  return (
    <>
      <div className="containerfluid">
        <div className="containerchatbox">
          <div className="chatbox">
            {msginfo.length !== 0 &&
              msginfo.map((val, index) => {
                return val;
              })}
          </div>
          <div className="sendbox">
            <div className="inputbox">
              <input
                type="text"
                placeholder="Enter Message"
                value={msg}
                onChange={(e) => {
                  setmsg(e.target.value);
                }}
              ></input>
              <button
                type="button"
                onClick={() => {
                  messagedalo("owner");
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
