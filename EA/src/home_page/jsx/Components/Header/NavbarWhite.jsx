import IconButton from "./IconButton";
import Dropdown from "./Dropdown";
import dots from "/src/home_page/media/img/svg/dropdowndots.svg";
import anvorgesa from "/src/home_page/media/img/svg/anvorgesa.svg";
import eaimage from "/src/home_page/media/img/svg/ealogo.svg";

export default function NavbarWhite({ openSidebar, openSidebarMedia }) {
  const juegos = [
    "EXPLORAR JUEGOS",
    "Últimos juegos",
    "Próximamente",
    "Juegos gratuitos",
    "EA SPORTS",
    "EA Originals",
    "Biblioteca de juegos",
    "Ofertas de la EA App",
  ];
  const exp = [
    "EA Play",
    "EA App",
    "Juego competitivo",
    "EA Play Live",
    "Pruebas de juego",
  ];
  const acerca = [
    "Compañía",
    "Estudios de EA",
    "Trabajar en EA",
    "Nuestra tecnología",
    "EA Partners",
    "Noticias",
    "EA por dentro",
  ];
  const compromisos = [
    "Nuestros compromisos",
    "Juego positivo",
    "Diversidad e inclusión",
    "Impacto social",
    "Empleados y cultura",
    "Medioambiente",
  ];
  const recursos = [
    "Ayuda",
    "Foro",
    "Herram.parentales y de juego",
    "Accesibilidad",
    "Prensa",
    "Inversores",
  ];

  return (
    <div id="f_nav_white">
      <IconButton
        customClick={openSidebar}
        id="f_sidebar_icon"
        src={dots}
        srcClass="f_svg_drop"
      />
      <IconButton
        customClick={openSidebarMedia}
        id="f_icon_anvorgesa"
        src={anvorgesa}
        srcClass="f_svg_drop"
      />
      <IconButton id={"f_eaimage"} src={eaimage} aHref={""} />

      <Dropdown header={"Juegos"} itemList={juegos} />
      <Dropdown header={"Más experiencias"} itemList={exp} />
      <Dropdown header={"Acerca de"} itemList={acerca} />
      <Dropdown header={"Compromisos"} itemList={compromisos} />
      <Dropdown header={"Recursos"} itemList={recursos} />
    </div>
  );
}
