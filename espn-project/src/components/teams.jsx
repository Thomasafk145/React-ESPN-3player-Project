import { SportList } from "../components/nav";

export default function Teams() {
  const req = fetch(
    `https://site.api.espn.com/apis/site/v2/sports/${sport.path}/teams`,
  )
    .then((res) => res.json())
    .then((res) => {});
}
