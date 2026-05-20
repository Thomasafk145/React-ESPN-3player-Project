import { useContext, useEffect } from "react";
import SportContext from "../contexts/sportContext";

export default function Sport() {
  const sport = useContext(SportContext).sport;
  //https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news

  useEffect(() => {
    console.log(`I'm now requesting news about ${sport.short}`);
  }, [sport]);
  return (
    <>
      <h1>This is our page about {sport.path}</h1>
    </>
  );
}
