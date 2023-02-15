import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Client from "./Client";

function App() {
  return (
    <div className="App_test">
      <Routes>
        <Route path="/admin/*" element={<Admin/>}/>
        <Route path="/" element={<Client/>}/>
      </Routes>
    </div>
  );
}

export default App;
