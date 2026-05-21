import { Routes, Route, Link } from "react-router-dom";
import BaseBall from "./pages/BaseBall";
import Football from "./pages/Football";
import Soccer from "./pages/Soccer";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Sport from "./pages/Sport";
import SportContext from "./contexts/sportContext";
import { useState } from "react";
function App() {
  const [sport, setSport] = useState("");
  const contextObject = {
    sport: sport,
    setSport: setSport,
  };
  return (
    <>
      <SportContext.Provider value={contextObject}>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sport" element={<Sport />}></Route>
        </Routes>
      </SportContext.Provider>
    </>
  );
}
export default App;
