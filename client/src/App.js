import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const call = () => {
    axios("http://localhost:3001/")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => setError(err));
  };
  return (
    <div className="App">
      <button onClick={call}>Call</button>
      <div>Data: {data && data.msg}</div>
      <div>Error:{error && error.message}</div>
    </div>
  );
}

export default App;
