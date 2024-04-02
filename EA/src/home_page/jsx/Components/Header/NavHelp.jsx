import IconButton from "./IconButton";

import verify from "/src/home_page/media/img/svg/ea-medallion-white.svg";
import connect from "/src/home_page/media/img/svg/eaglobalnav-iconlink-white.svg";
import code from "/src/home_page/media/img/svg/ea-medallion-white.svg";
import online from "/src/home_page/media/img/svg/eaglobalnav-iconalert-white.svg";
import x from "/src/home_page/media/img/svg/x_nav.svg";

import { useEffect, useRef } from "react";

export default function NavHelp({ closeHelp, usernameOpen }) {
  let helpRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!usernameOpen) {
        if (
          !helpRef.current.contains(event.target) &&
          !event.target.classList.contains("f_nav_ul") &&
          event.target.id != "f_help_icon" &&
          !event.target.classList.contains("f_nav_svg")
        ) {
          closeHelp();
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="f_nav_hidden" id="f_nav_help" ref={helpRef}>
      <img
        className="f_nav_x"
        onClick={closeHelp}
        src={x}
        id="f_nav_hidden_close2"
      />
      <div className="f_help_content">
        <div className="f_help_wrapper">
          <b className="f_help_title"> ¿Necesitas ayuda? </b>
          <IconButton
            aClass="f_help_link"
            srcClass="f_help_svg"
            src={verify}
            aText="Verifica mi inicio de sesión de EA"
          />
          <IconButton
            aClass="f_help_link"
            srcClass="f_help_svg"
            src={connect}
            aText="Vinculación de las cuentas de las plataformas a la Cuenta EA"
          />
          <IconButton
            aClass="f_help_link"
            srcClass="f_help_svg"
            src={code}
            aText="¿Cómo canjeo un código?"
          />
          <IconButton
            aClass="f_help_link"
            srcClass="f_help_svg"
            src={online}
            aText="¡No puedo jugar online!"
          />
          <p className="f_help_p">
            ¿No encuentras lo que buscas? Visita la
            <a className="f_help_text"> Ayuda de EA, Answers HQ </a> o los
            <a className="f_help_text"> foros de EA. </a>
          </p>
        </div>
      </div>
    </div>
  );
}
