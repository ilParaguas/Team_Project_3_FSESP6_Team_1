import IconButton from "./IconButton";

import iconuser from "/src/home_page/media/img/svg/eaglobalnav-iconsignin.svg";
import iconregister from "/src/home_page/media/img/svg/eaglobalnav-iconregister.svg";
import x from "/src/home_page/media/img/svg/x_nav.svg";
import { useEffect, useRef } from "react";

export default function NavUsername({ closeUsername, helpOpen }) {
  let usernameRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!helpOpen) {
        if (
          !usernameRef.current.contains(event.target) &&
          !event.target.classList.contains("f_nav_ul") &&
          event.target.id != "f_username_icon" &&
          !event.target.classList.contains("f_nav_svg")
        ) {
          closeUsername();
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="f_nav_hidden" id="f_nav_username" ref={usernameRef}>
      <img
        className="f_nav_x"
        onClick={closeUsername}
        src={x}
        id="f_nav_hidden_close1"
      />
      <div className="f_username_content">
        <div className="f_username_wrapper">
          <IconButton
            aClass="f_username_link"
            srcClass="f_username_svg"
            src={iconuser}
            aText="Iniciar sesión"
          />
          <IconButton
            aClass="f_username_link"
            srcClass="f_username_svg"
            src={iconregister}
            aText="Crear cuenta"
          />
        </div>
      </div>
    </div>
  );
}
