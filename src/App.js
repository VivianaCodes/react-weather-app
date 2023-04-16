import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Naples" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/viviana-milone-9149a56/ "
            target="_blank"
            rel="noreferrer"
          >
            Viviana Milone
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/VivianaCodes/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
