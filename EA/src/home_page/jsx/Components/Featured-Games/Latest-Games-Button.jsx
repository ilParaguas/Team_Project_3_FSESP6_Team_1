import { Link } from "react-router-dom";

export function LatestGamesButton({ info }) {
  return (
    <div className="latest-games">
      <span className="latest-games-text">{info?.linkText}</span>
      <Link className="latest-games-link" to={info?.link}>
        {info?.linkText}
      </Link>
    </div>
  );
}
