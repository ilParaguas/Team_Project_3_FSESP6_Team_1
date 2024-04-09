import Sidebar from "./Sidebar";
import Sidebar_media from "./Sidebar_media";
import Cover from "./Cover";
import NavbarBlack from "./NavbarBlack";
import NavUsername from "./NavUsername";
import NavbarWhite from "./NavbarWhite";
import NavHelp from "./NavHelp";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";
import useHeader from "../../Hooks/useHeader";

export default function Header() {
  let navBlack, navWhite, sidebar, cover, sidebar_media, nav_username, nav_help;
  const [usernameOpen, setUsernameOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch data
  const lang = useContext(LanguageContext);
  const { data, loading } = useHeader(lang);

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
    if (navWhite && navBlack) {
      if (document.body.style.overflow != "hidden") {
        navBlack.style.top = blackTop;
        navWhite.style.top = whiteTop;
      }
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
    if (window.innerWidth > 1456) {
      sidebar.style.width = "26rem";
    } else {
      sidebar.style.width = "26%";
    }
    sidebar.style.top = "40px";
    openCover();
    if (navBlack.style.top == "-40px") {
      editNavs("0px", "40px");
    }
    setSidebarOpen(true);
  }

  // Abre la sidebar responsiva (cuando width < 1032px )
  function openSidebarMedia() {
    if (window.innerWidth < 321) {
      sidebar_media.style.width = "100%";
    } else {
      sidebar_media.style.width = "86.5%";
    }
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollpos]);

  // Debug
  if (loading) {
    return <div> Loading...</div>;
  }

  return (
    <div id="header">
      {!loading && (
        <>
          <Sidebar close={close} headerText={data.sidebar_header} />

          <Sidebar_media close={close} menu={data.menuItems} />
          <Cover close={close} />
          <div id="f_nav">
            <NavbarBlack
              handleUsername={handleUsername}
              handleHelp={handleHelp}
            />
            <NavUsername
              closeUsername={closeUsername}
              helpOpen={helpOpen}
              loginText={data.nav_username.login}
              signInText={data.nav_username.signin}
            />
            <NavHelp
              closeHelp={closeHelp}
              usernameOpen={usernameOpen}
              textData={data.nav_help}
            />
            <NavbarWhite
              openSidebar={openSidebar}
              openSidebarMedia={openSidebarMedia}
              menu={data.menuItems}
            />
          </div>
        </>
      )}
    </div>
  );
}
