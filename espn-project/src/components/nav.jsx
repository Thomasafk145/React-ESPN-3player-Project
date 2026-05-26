import { Link } from "react-router-dom";
import SportContext from "../contexts/sportContext";
import { useContext } from "react";
import Scoreboard from "./scoreboard";

export const SportList = [
  { short: "MLB", path: "baseball/mlb" },
  { short: "NFL", path: "football/nfl" },
  { short: "Soccer", path: "soccer/eng.1" },
];

function Nav() {
  return (
    <>
      <nav>
        <Link style={{ color: "white", fontSize: "25px" }} to="/">
          Home |{" "}
        </Link>
        <Link style={{ color: "white", fontSize: "25px" }} to="/sport">
          Sport{" "}
        </Link>
      </nav>
      <Scoreboard></Scoreboard>
      <div>
        {/* <button
          onClick={() => {
            contextObj.setSport("MLB"); //baseball/mlb
          }}
        >
          MLB
        </button>
        <button
          onClick={() => {
            contextObj.setSport("NFL");
          }}
        >
          NFL
        </button>
        <button
          onClick={() => {
            contextObj.setSport("NBA");
          }}
        >
          NBA
        </button> */}
      </div>
    </>
  );
}
export default Nav;
