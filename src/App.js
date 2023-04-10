import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by {""}
          <a href="" target="_blank" rel="noref">
            Viviana Milone
          </a>
          {""}and is{""}
          <a href="" target="_blank" rel="noref">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
