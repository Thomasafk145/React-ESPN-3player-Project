import { useContext, useEffect } from "react";
import SportContext from "../contexts/sportContext";

import { SportList } from "../components/nav";
export default function Sport() {
  const sport = useContext(SportContext).sport;
  //https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news
  const contextObj = useContext(SportContext);

  useEffect(() => {
    console.log(`I'm now requesting news about ${sport.short}`);
  }, [sport]);
  return (
    <>
      {SportList.map((s, i) => (
        <button
          key={`sportsbutton${i}`}
          onClick={() => {
            contextObj.setSport(s); //baseball/mlb
          }}
        >
          {s.short}
        </button>
      ))}
      <h1>This is our page about {sport.path}</h1>
    </>
  );
}
