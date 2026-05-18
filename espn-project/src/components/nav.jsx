import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/baseball">Baseball | </Link>
        <Link to="/football">Football | </Link>
        <Link to="/soccer">Soccer | </Link>
      </nav>
    </>
  );
}
export default Nav;
