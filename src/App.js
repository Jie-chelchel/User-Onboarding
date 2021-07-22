import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import axios from "axios";
import User from "./components/User";
function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    id: "",
    service: false,
  });
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
  const editInfo = (id) => {
    const user = users.find((user) => user.id === id);
    console.log(user);
    setForm({ ...user });
    setUsers(users.filter((user) => user.id !== id));
  };

  const deleteInfo = (id) => {
    const user = users.find((user) => user.id === id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <h1>User Onboarding</h1>

      <Form onSubmitUser={onSubmitUser} form={form} setForm={setForm} />
      {users.map((user) => {
        return (
          <User
            key={user.id}
            user={user}
            editInfo={() => editInfo(user.id)}
            deleteInfo={() => deleteInfo(user.id)}
          />
        );
      })}
    </div>
  );
}

export default App;
