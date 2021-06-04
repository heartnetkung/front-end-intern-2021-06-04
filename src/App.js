import logo from "./logo.svg";
import "./App.css";
import Button from "./ExampleButton";
import BasicNameForm from "./BasicNameForm";
import { useModal } from "./Modal";
import { useEffect, useContext } from "react";
import { GlobalStateContext } from "./global_state";

// const fetchAPI = async () => {
//   var res = await fetch("http://206.189.89.204/app/echo/echo_get");
//   console.log(res.ok);
//   console.log(res.status);

//   var body = await res.json();
//   console.log(body);
// };

function App() {
  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  const { people, addPeople, removePeople } = useContext(GlobalStateContext);

  useEffect(() => {
    console.log(people, addPeople, removePeople);
  }, []);

  const [modalText, setModalText, onRequestClose] = useModal();

  const onSubmit = (a) => {
    setModalText(a);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload abc.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BasicNameForm defaultValue={"hello"} onSubmit={onSubmit} />
        <Button label={"abc"} />
      </header>
    </div>
  );
}

export default App;
