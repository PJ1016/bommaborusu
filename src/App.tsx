import React, { useState } from "react";
import "./App.css";
import { Button, Typography } from "@mui/material";

function App() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setNumber(randomNumber);
  };

  // Render the component
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" gutterBottom>
          {number}
        </Typography>
        <Button variant="contained" onClick={handleClick}>
          Generate a number
        </Button>
      </header>
    </div>
  );
}

export default App;
