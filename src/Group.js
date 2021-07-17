import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Room from "./Room";

const Group = () => {
  const {
    error,
    isPending,
    data: rooms
  } = useFetch("http://localhost:1337/groups");
  return (
    <div className="group">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {rooms && <Room rooms={rooms} />}
    </div>
  );
};

export default Group;
