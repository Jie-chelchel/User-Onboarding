import React from "react";
const User = (props) => {
  return (
    <div>
      <p>{props.user.username}</p>
      <p>{props.user.email}</p>
    </div>
  );
};

export default User;
