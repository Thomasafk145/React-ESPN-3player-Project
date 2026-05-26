import { useContext, useEffect, useState } from "react";
import { SportList } from "./nav";
import SportContext from "../contexts/sportContext";

export default function Scoreboard() {
  const [scores, setScores] = useState();
  const sport = useContext(SportContext).sport;
  useEffect(() => {
    if (!sport) {
      return;
    }
    const req = fetch(
      `https://site.api.espn.com/apis/site/v2/sports/${sport.path}/scoreboard`,
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setScores(res);
      });
  }, [sport]);

  return (
    <div style={{ display: "flex", overflow: "auto" }}>
      {scores &&
        scores.events.map((e, i) => <GameScore competition={e} key={i} />)}
    </div>
  );
}

function GameScore({ competition }) {
  const team1 = competition.competitions[0].competitors[0];
  const team2 = competition.competitions[0].competitors[1];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex" }}>
          <img style={{ width: "80px" }} src={team1.team.logo} />
          <h3>{team1.team.displayName}</h3>
        </div>
        <p style={{ textAlign: "center" }}>VS.</p>
        <div style={{ display: "flex" }}>
          <img style={{ width: "80px" }} src={team2.team.logo} />
          <h3>{team2.team.displayName}</h3>
        </div>
      </div>
    </>
  );
}
