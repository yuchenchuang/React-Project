const Room = ({ rooms }) => {
  function handleClick() {
    console.log();
  }
  return (
    <div className="room-list">
      {rooms.map((room) => (
        <div className="room-preview" key={room.id}>
          <img
            src={`http://localhost:1337${room.Media.url}`}
            alt="none"
            className="group_img"
            onClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
};

export default Room;
