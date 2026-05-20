import { Link } from "react-router-dom";
import SportContext from "../contexts/sportContext";
import { useContext } from "react";

export const SportList = [
  { short: "MLB", path: "baseball/mlb" },
  { short: "NFL", path: "football/nfl" },
  { short: "Soccer", path: "soccer/eng.1" },
];

function Nav() {
  const contextObj = useContext(SportContext);
  return (
    <>
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/baseball">Baseball | </Link>
        <Link to="/football">Football | </Link>
        <Link to="/soccer">Soccer | </Link>
        <Link to="/sport">Sport | </Link>
      </nav>
      <div>
        {SportList.map((s, i) => (
          <button
            onClick={() => {
              contextObj.setSport(s); //baseball/mlb
            }}
          >
            {s.short}
          </button>
        ))}
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
