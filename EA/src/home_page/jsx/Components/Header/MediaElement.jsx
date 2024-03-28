import ContentLink from "./ContentLink";

export default function MediaElement({ big }) {
  return (
    <div className="f_sidebar_media_content">
      <div className="f_sidebar_media_content_header">
        <p> Juegos </p>
        <div className="f_chevron">
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        className="f_sidebar_media_content_body"
        id={big ? "f_body_big" : ""}
      >
        <div className="f_sidebar_media_content_link">
          <p>EXPLORAR JUEGOS</p>
          <div className="f_sidebar_media_content_link_wrapper">
            <ContentLink text="Últimos juegos" />
            <ContentLink text="Próximamente" />
            <ContentLink text="Juegos gratuitos" />
            <ContentLink text="EA Sports" />
            <ContentLink text="EA Originals" />
            <ContentLink text="Biblioteca de juegos" />
            <ContentLink text="Ofertas de la EA app" />
          </div>
        </div>
      </div>
    </div>
  );
}
