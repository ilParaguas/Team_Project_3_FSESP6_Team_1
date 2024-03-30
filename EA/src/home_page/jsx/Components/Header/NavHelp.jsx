import IconButton from "./IconButton";

import verify from "/src/home_page/media/img/svg/ea-medallion-white.svg";
import connect from "/src/home_page/media/img/svg/eaglobalnav-iconlink-white.svg";
import code from "/src/home_page/media/img/svg/ea-medallion-white.svg";
import online from "/src/home_page/media/img/svg/eaglobalnav-iconalert-white.svg";
import { useEffect, useRef } from "react";

export default function NavHelp() {
  let helpRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!helpRef.current.contains(event.target)) {
        helpRef.current.style.height = "0px";
        document.body.style.overflow = "auto";
      }
    });
  });

  return (
    <div className="f_nav_hidden" id="f_nav_help" ref={helpRef}>
      <img />
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
