import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const submitUserHandler = () => {};

  return (
    <div className="App">
      <h1>User Onboarding</h1>

      <Form onSubmitUser={submitUserHandler} />
    </div>
  );
}

export default App;
