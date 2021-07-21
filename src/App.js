import Group from "./Group";
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1 className="greet">WELCOME TO CHATCHAT</h1>
      <Group />
      <div id="chatroom"></div>
    </div>
  );
}

export default App;
