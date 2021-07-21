import Chat from "./Chat";
import ReactDOM from "react-dom";

const Room = ({ rooms }) => {
  function handleClick(title) {
    const chatroom = <Chat room_name={title} />;
    ReactDOM.render(chatroom, document.getElementById("chatroom"));
  }
  return (
    <div className="room-list">
      {rooms.map((room) => (
        <div className="room-preview" key={room.id}>
          <img
            src={`http://localhost:1337${room.Media.url}`}
            alt="none"
            className="group_img"
            onClick={() => handleClick(room.Text)}
          />
          <a href="#" className="room-title">
            {room.Text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Room;
