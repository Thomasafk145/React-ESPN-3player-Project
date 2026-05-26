import { useContext, useEffect, useState } from "react";
import SportContext from "../contexts/sportContext";
import "./sport.css";

import { SportList } from "../components/nav";
export default function Sport() {
  const sport = useContext(SportContext).sport;
  const [news, setNews] = useState();
  //https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news
  const contextObj = useContext(SportContext);

  useEffect(() => {
    if (!sport) {
      return;
    }
    console.log(`I'm now requesting news about ${sport.short}`);
    const req = fetch(
      `https://site.api.espn.com/apis/site/v2/sports/${sport.path}/news`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        console.log(data);
      });
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
      {news &&
        news.articles.map((a, i) => (
          <div key={i}>
            {a.images && (
              <img
                style={{ width: 500 }}
                className="newsImage"
                src={a.images[0].url}
              />
            )}
            <h3>{a.headline}</h3>
            <p>{a.description}</p>
          </div>
        ))}
    </>
  );
}
