import React from "react";
import styled from "styled-components";

const UserStyle = styled.div`
  width: 80%;
  background: lightblue;

  height: 10vh;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & span {
    font-weight: bold;
  }
`;
const User = (props) => {
  return (
    <UserStyle>
      <p>
        <span>Username:</span> {props.user.username}
      </p>
      <p>
        <span>Email: </span>
        {props.user.email}
      </p>
    </UserStyle>
  );
};

export default User;
