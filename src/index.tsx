import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import heading from "./heading.module.css";
import content from "./content.module.css";

const App = () => (
  <>
    <Heading />
    <Content />
  </>
);

const Heading = () => (
  <h1 className={heading.heading}>My React and TypeScript App</h1>
);

const Content = () => <div className={content.content}>With CSS!</div>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
