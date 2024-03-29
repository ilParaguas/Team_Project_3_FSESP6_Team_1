export function GameCard({ text, content }) {
  return (
    <a className="divZona" href="#">
      <img
        className="imgClass"
        src={"./src/home_page/media/img/featured-games/" + content.urlImg}
        alt={content.game}
      />

      {content.urlLogo && (
        <img
          className="logoClass"
          src={"./src/home_page/media/img/featured-games/" + content.urlLogo}
          alt={content.game + " Logo"}
        />
      )}
      <span className="spanClass">{text}</span>
    </a>
  );
}
