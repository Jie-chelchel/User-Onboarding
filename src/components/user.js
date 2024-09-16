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
      <button data-cy="editBtn" onClick={props.editInfo}>
        Edit
      </button>
      <button data-cy="deleteBtn" onClick={props.deleteInfo}>
        Delete
      </button>
    </UserStyle>
  );
};

export default User;
