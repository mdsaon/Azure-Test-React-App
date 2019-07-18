import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Hook from "./components/hook";
// import Projects from "./components/projects";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Projects /> */}
        <Hook />
      </div>
    </Provider>
  );
}

export default App;
