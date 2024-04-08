import IconButton from "./IconButton";

import verify from "/src/home_page/media/img/svg/ea-medallion-white.svg";
import connect from "/src/home_page/media/img/svg/eaglobalnav-iconlink-white.svg";
import code from "/src/home_page/media/img/svg/ea-medallion-white.svg";
import online from "/src/home_page/media/img/svg/eaglobalnav-iconalert-white.svg";
import x from "/src/home_page/media/img/svg/x_nav.svg";

import { useEffect, useRef } from "react";

export default function NavHelp({ closeHelp, usernameOpen, textData }) {
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
          <b className="f_help_title"> {textData.title} </b>
          <IconButton
            aClass="f_help_link"
            srcClass="f_help_svg"
            src={verify}
            aText={textData.verify}
          />
          <IconButton
            aClass="f_help_link"
            srcClass="f_help_svg"
            src={connect}
            aText={textData.linkAcc}
          />
          <IconButton
            aClass="f_help_link"
            srcClass="f_help_svg"
            src={code}
            aText={textData.redeemCode}
          />
          <IconButton
            aClass="f_help_link"
            srcClass="f_help_svg"
            src={online}
            aText={textData.onlineIssue}
          />
          <p className="f_help_p">
            {textData.whiteText1}
            <a className="f_help_text">{textData.redText1} </a>{" "}
            {textData.whiteText2}
            <a className="f_help_text"> {textData.redText2} </a>
          </p>
        </div>
      </div>
    </div>
  );
}
