# Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import useLocation from "./useLocation";
import "./styles.css";

function App() {
  const [latitude, longitude] = useLocation();
  return (
    <div className="App">
      <h1>Latitude: {latitude}</h1>
      <h1>Longitude: {longitude} </h1>
    </div>
  );
}

```
