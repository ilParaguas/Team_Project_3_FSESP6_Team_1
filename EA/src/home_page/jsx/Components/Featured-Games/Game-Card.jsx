import { Link } from "react-router-dom"

export function GameCard({ text, content, link }) {
  return (
    <Link className="gameLink" to={link}>
      <img
        className="gameImage"
        src={"./src/home_page/media/img/featured-games/" + content.urlImg}
        alt={content.game}
      />

      {content.urlLogo && (
        <div className="floatingLogo">
          <img
            style={{width:content.width}}
            className="gameLogo"
            src={"./src/home_page/media/img/featured-games/" + content.urlLogo}
            alt={content.game + " Logo"}
          />
        </div>
      )}
      <span className="gameLinkSpan">{text}</span>
    </Link>
  );
}
