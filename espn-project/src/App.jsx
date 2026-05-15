import {Routes, Route, Link} from "react-router-dom"
import BaseBall from "./pages/BaseBall"
import Football from "./pages/Football"
import Soccer from "./pages/Soccer"

function App() {
    return (
        <>
        <Nav></Nav>
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
        </>
    )
}
export default App;
