import IconButton from "./IconButton";
import MediaElement from "./MediaElement";
import x_media from "/src/home_page/media/img/svg/x_media.svg";
import ealogo from "/src/home_page/media/img/svg/ealogo.svg";

export default function Sidebar_media({ close }) {
  const item1 = {
    title: "JUEGOS",
    listTitle: "EXPLORAR JUEGOS",
    list: [
      "Últimos juegos",
      "Próximamente",
      "Juegos gratuitos",
      "EA SPORTS",
      "EA Originals",
      "Biblioteca de juegos",
      "Ofertas de la EA app",
    ],
    listTitle2: "PLATAFORMAS",
    list2: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Móviles", "Pogo"],
  };
  const item2 = {
    title: "EXPERIENCIAS",
    list: ["EA app", "EA Play", "Juego competitivo", "Pruebas de juego"],
  };
  const item3 = {
    title: "ACERCA DE",
    list: [
      "Compañía",
      "Trabajar en EA",
      "Noticias",
      "Tecnología",
      "Estudios de EA",
      "EA Partners",
    ],
  };
  const item4 = {
    title: "COMPROMISOS",
    list: [
      "Nuestros compromisos",
      "Juego positivo",
      "Diversidad e inclusión",
      "Impacto social",
      "Empleados y cultura",
      "Medioambiente",
    ],
  };
  const item5 = {
    title: "RECURSOS",
    list: [
      "Ayuda",
      "Foros",
      "Herramientas de juego y parentales",
      "Accesibilidad",
      "Prensa",
      "Inversores",
    ],
  };

  return (
    <div className="f_sidebar_media" id="f_sidebar_media">
      <div className="f_sidebar_media_wrapper">
        <div className="f_sidebar_media_header">
          <IconButton
            aClass="f_sidebar_media_text"
            srcClass="f_sidebar_media_himage"
            src={ealogo}
            aHref={""}
          />
          <img
            className="f_sidebar_media_x"
            id="f_closemedia"
            src={x_media}
            onClick={close}
          />
        </div>
        <div className="f_sidebar_media_body">
          <div className="f_sidebar_media_body_wrapper">
            <MediaElement big={true} item={item1} />
            <MediaElement item={item2} />
            <MediaElement item={item3} />
            <MediaElement item={item4} />
            <MediaElement item={item5} />
          </div>
        </div>
      </div>
    </div>
  );
}
