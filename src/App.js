import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  const onSubmitUser = (form) => {
    const newUser = {
      username: form.username,
      password: form.password,
      email: form.email,
      service: form.service,
    };
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUser([...user, res.data]);
      })
      .catch((err) => console.log(err));

    console.log(user);
  };

  return (
    <div className="App">
      <h1>User Onboarding</h1>

      <Form onSubmitUser={onSubmitUser} />
    </div>
  );
}

export default App;
