import React from "react";
import "./App.css";
import Headerbar from "./components/header.jsx";
import Demo from "./components/Table.jsx";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [data, setData] = React.useState([]);
  const [opened, { open, close }] = useDisclosure(false);

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setData(response.data);
  };

  return (
    <div className="App">
      <Headerbar fetchData={fetchData} close={close}/>
      <div className="center">
        <Demo data={data} fetchData={fetchData} opened={opened} close={close} open={open} />
      </div>
    </div>
  );
}

export default App;
