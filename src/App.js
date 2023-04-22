import { Route, Routes } from "react-router-dom";
import { NamePage } from "./NamePage";
import { ChatPage } from "./ChatPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NamePage />} />
        <Route path="/chats/:name" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
