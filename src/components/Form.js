import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & label {
    margin: 10px;
    margin-right: auto;
    margin-left: auto;
  }

  & input {
    margin-left: 20px;
    margin-right: auto;
  }

  & button {
    width: 30%;
    margin: 0 auto;
  }
`;

const onChange = (evt) => {
  const { name, type, value, checked } = evt.target;
};

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    service: false,
  });

  const onChange = (evt) => {
    console.log(evt.target.value);
    const { name, type, value, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: valueToUse });
  };
  return (
    <FormStyle>
      <label>
        Name
        <input
          type="text"
          name="username"
          onChange={onChange}
          value={form.username}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={form.email}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          onChange={onChange}
          value={form.password}
        />
      </label>
      <label>
        Terms of Service
        <input
          type="checkbox"
          name="service"
          onChange={onChange}
          checked={form.service}
        />
      </label>
      <button>Submit</button>
    </FormStyle>
  );
};

export default Form;
