import IconButton from "./IconButton";
import iconuser from "/src/home_page/media/img/svg/eaglobalnav-iconsignin.svg";
import iconregister from "/src/home_page/media/img/svg/eaglobalnav-iconregister.svg";
import { useEffect, useRef } from "react";

export default function NavUsername() {
  let usernameRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!usernameRef.current.contains(event.target)) {
        usernameRef.current.style.height = "0px";
        document.body.style.overflow = "auto";
      }
    });
  });

  return (
    <div className="f_nav_hidden" id="f_nav_username" ref={usernameRef}>
      <img />
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
