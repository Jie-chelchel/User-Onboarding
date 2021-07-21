import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import axios from "axios";
import User from "./components/User";
function App() {
  const [users, setUsers] = useState([]);

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
        setUsers([...users, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>User Onboarding</h1>

      <Form onSubmitUser={onSubmitUser} />
      {
        (users.map = (user) => {
          <User user={user} />;
        })
      }
    </div>
  );
}

export default App;
