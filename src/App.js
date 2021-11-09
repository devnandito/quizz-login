import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    (async () => {
      const requestOptions = {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      };
      const response = await fetch(
        "http://localhost:9000/api/user",
        requestOptions
      );
      const content = await response.json();
      if (content.message === "unautheticated") {
        setUsername("");
      }
    })();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav username={username} setUsername={setUsername} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home username={username} />}
          />
          <Route
            path="/login"
            exact
            component={() => <Login setUsername={setUsername} />}
          />
          <Route path="/register" exact component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
