import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";


import * as ServiceWorker from "./serviceWorker";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ServiceWorker.unregister();
