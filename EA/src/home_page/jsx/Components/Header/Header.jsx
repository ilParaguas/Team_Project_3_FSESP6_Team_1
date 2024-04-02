import Sidebar from "./Sidebar";
import Sidebar_media from "./Sidebar_media";
import Cover from "./Cover";
import NavbarBlack from "./NavbarBlack";
import NavUsername from "./NavUsername";
import NavbarWhite from "./NavbarWhite";
import NavHelp from "./NavHelp";
import { useEffect, useState } from "react";

export default function Header() {
  let navBlack, navWhite, sidebar, cover, sidebar_media, nav_username, nav_help;
  const [usernameOpen, setUsernameOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Carga de datos para trabajar mas facilmente y tener un codigo mas claro
  function loadData() {
    navBlack = document.getElementById("f_nav_black");
    navWhite = document.getElementById("f_nav_white");
    sidebar = document.getElementById("f_sidebar");
    cover = document.getElementById("f_cover");
    sidebar_media = document.getElementById("f_sidebar_media");
    nav_username = document.getElementById("f_nav_username");
    nav_help = document.getElementById("f_nav_help");
  }

  useEffect(() => loadData());

  // Funcion para mover la posicion de las barras de navegacion superiores
  function editNavs(blackTop, whiteTop) {
    if (document.body.style.overflow != "hidden") {
      navBlack.style.top = blackTop;
      navWhite.style.top = whiteTop;
    }
  }

  // Funcion para cerrar todos los desplegables que haya abiertos
  function close() {
    sidebar.style.width = "0px";
    sidebar.style.top = "0px";
    sidebar_media.style.width = "0px";
    sidebar_media.style.top = "0px";
    closeUsername();
    closeHelp();
    cover.style.opacity = 0;
    cover.style.visibility = "hidden";

    if (window.scrollY != 0) {
      editNavs("-40px", "0px");
    }

    document.body.style.overflow = "auto";
    setSidebarOpen(false);
  }

  // Funcion que despliega la cobertura negra al abrir una de la barras laterales
  function openCover() {
    cover.style.opacity = 0.85;
    cover.style.visibility = "visible";

    if (navBlack.style.top == "-40px") {
      editNavs("0px", "40px");
    }

    document.body.style.overflow = "hidden";
  }

  // Abre la sidebar por defecto
  function openSidebar() {
    sidebar.style.width = "20rem";
    sidebar.style.top = "40px";
    openCover();
    if (navBlack.style.top == "-40px") {
      editNavs("0px", "40px");
    }
    setSidebarOpen(true);
  }

  // Abre la sidebar responsiva (cuando width < 1032px )
  function openSidebarMedia() {
    sidebar_media.style.width = "86.5%";
    sidebar_media.style.top = "40px";
    openCover();
    if (navBlack.style.top == "-40px") {
      editNavs("0px", "40px");
    }
    setSidebarOpen(true);
  }

  // Funcion que abre o cierra el desplegable de registro de usuario
  function handleUsername() {
    if (nav_username.style.height !== "400px") {
      closeHelp();
      nav_username.style.height = "400px";
      nav_help.style.height = "0px";
      document.body.style.overflow = "hidden";
      setUsernameOpen(true);
    } else {
      closeUsername();
    }
  }

  function closeUsername() {
    nav_username.style.height = "0px";
    setUsernameOpen(false);
    if (
      (sidebar_media.style.width == "0px" || sidebar_media.style.width == 0) &&
      (sidebar.style.width == "0px" || sidebar.style.width == 0)
    ) {
      document.body.style.overflow = "auto";
    }
  }

  // Funcion que abre o cierra el desplegable de ayuda
  function handleHelp() {
    if (nav_help.style.height !== "400px") {
      closeUsername();
      nav_help.style.height = "400px";
      document.body.style.overflow = "hidden";
      nav_username.style.height = "0px";
      setHelpOpen(true);
    } else {
      closeHelp();
    }
  }

  function closeHelp() {
    nav_help.style.height = "0px";
    setHelpOpen(false);
    if (
      (sidebar_media.style.width == "0px" || sidebar_media.style.width == 0) &&
      (sidebar.style.width == "0px" || sidebar.style.width == 0)
    ) {
      document.body.style.overflow = "auto";
    }
  }
  // El useEffect controla el movimiento del navbar negro cuando se scrollea por la pagina
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos && !sidebarOpen) {
        editNavs("0px", "40px");
      } else {
        editNavs("-40px", "0px");
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <div>
      <Sidebar close={close} />
      <Sidebar_media close={close} />
      <Cover close={close} />
      <div id="f_nav">
        <NavbarBlack handleUsername={handleUsername} handleHelp={handleHelp} />
        <NavUsername closeUsername={closeUsername} helpOpen={helpOpen} />
        <NavHelp closeHelp={closeHelp} usernameOpen={usernameOpen} />
        <NavbarWhite
          openSidebar={openSidebar}
          openSidebarMedia={openSidebarMedia}
        />
      </div>
    </div>
  );
}
