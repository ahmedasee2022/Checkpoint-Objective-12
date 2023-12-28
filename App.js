
import './App.css';

import React from "react";
import Name from "./Name";
import Price from "./Price";
 import Description from "./Description";
// import Image from "./Image";
// import product from "./product";

// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
     <Name/>
        <Price/>
        <Description/>
    </div>
  );
}

export default App;
