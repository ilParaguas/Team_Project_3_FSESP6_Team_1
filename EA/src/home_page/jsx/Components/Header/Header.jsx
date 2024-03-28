import Sidebar from "./Sidebar";
import Sidebar_media from "./Sidebar_media";
import Cover from "./Cover";
import NavbarWhite from "./NavbarWhite";
import NavbarBlack from "./NavbarBlack";
import { useEffect } from "react";

export default function Header() {
  let navBlack, navWhite, sidebar, cover, sidebar_media, nav_username, nav_help;

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

  function editBlackNavbar(blackTop, whiteTop) {
    navBlack.style.top = blackTop;
    navWhite.style.top = whiteTop;
  }

  function close() {
    sidebar.style.width = "0px";
    sidebar.style.top = "0px";
    sidebar_media.style.width = "0px";
    sidebar_media.style.top = "0px";
    cover.style.opacity = 0;
    cover.style.display = "none";

    if (navBlack.style.top == "0px" && window.scrollY != 0) {
      editBlackNavbar("-40px", "0px");
    }

    document.body.style.overflow = "auto";
  }

  function openSidebar() {
    sidebar.style.width = "20rem";
    sidebar.style.top = "40px";
    cover.style.opacity = 0.85;
    cover.style.display = "block";

    if (navBlack.style.top == "-40px") {
      editBlackNavbar("0px", "40px");
    }

    document.body.style.overflow = "hidden";
  }

  function openSidebarMedia() {
    sidebar_media.style.width = "86.5%";
    sidebar_media.style.top = "40px";
    cover.style.opacity = 0.85;
    cover.style.display = "block";

    if (navBlack.style.top == "-40px") {
      editBlackNavbar("0px", "40px");
    }
    document.body.style.overflow = "hidden";
  }

  return (
    <div>
      <Sidebar close={close} />
      <Sidebar_media close={close} />
      <Cover close={close} />
      <div id="f_nav">
        <NavbarBlack />
        <NavbarWhite
          openSidebar={openSidebar}
          openSidebarMedia={openSidebarMedia}
        />
      </div>
    </div>
  );
}
