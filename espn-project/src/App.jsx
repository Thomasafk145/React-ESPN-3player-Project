import { Routes, Route, Link } from "react-router-dom";
import BaseBall from "./pages/BaseBall";
import Football from "./pages/Football";
import Soccer from "./pages/Soccer";
import Nav from "./components/nav";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/baseball" element={<BaseBall />}></Route>
        <Route path="/football" element={<Football />}></Route>
        <Route path="/soccer" element={<Soccer />}></Route>
      </Routes>
    </>
  );
}
export default App;
