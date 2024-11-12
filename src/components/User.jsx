import React from "react";

const User = (props) => {
  return (
    <span className="user">
      <span className="name">
        <span className="name">{props.name}</span>
      </span>
      <span className="handle">{props.handle}</span>
    </span>
  );
};

export default User;