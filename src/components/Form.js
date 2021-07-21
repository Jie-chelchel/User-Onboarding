import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { reach } from "yup";
import schema from "./YupValidation";
const FormStyle = styled.form`
  width: 70%;
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

const Form = (props) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    service: false,
  });
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
    email: "",
    service: false,
  });
  const [disabled, setDisabled] = useState(true);
  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const onChange = (evt) => {
    const { name, type, value, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, value);
    setForm({ ...form, [name]: valueToUse });
    console.log(form);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    props.onSubmitUser(form);
    setForm({ username: "", password: "", email: "", service: false });
  };

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid), [form]);
  });
  return (
    <FormStyle onSubmit={formSubmit}>
      <label>
        Name
        <input
          type="text"
          name="username"
          onChange={onChange}
          value={form.username}
        />
      </label>
      {formErrors.username.length > 0 && <p>{formErrors.username}</p>}
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={form.email}
        />
      </label>
      {formErrors.email.length > 0 && <p>{formErrors.email}</p>}

      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={form.password}
        />
      </label>
      {formErrors.password.length > 0 && <p>{formErrors.password}</p>}

      <label>
        Terms of Service
        <input
          type="checkbox"
          name="service"
          onChange={onChange}
          checked={form.service}
        />
      </label>
      {formErrors.service.length > 0 && <p>{formErrors.service}</p>}

      <button disabled={disabled}>Submit</button>
    </FormStyle>
  );
};

export default Form;
