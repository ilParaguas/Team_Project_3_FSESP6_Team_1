import SidebarElementBig from "./SidebarElementBig";
import SidebarElement from "./SidebarElement";

import x from "/src/home_page/media/img/svg/x.svg";

import fifaLink from "/src/home_page/media/img/Header/fifa.jpg";
import fifaContent from "/src/home_page/media/img/svg/fifa23-logo-white-stacked.svg";

import f1Link from "/src/home_page/media/img/Header/f1.png";
import f1Content from "/src/home_page/media/img/Header/f1logo.png";

import maddenLink from "/src/home_page/media/img/Header/madden.jpg";
import maddenContent from "/src/home_page/media/img/svg/m23-gamebox-logo.svg";

import apexLink from "/src/home_page/media/img/Header/apex.jpg";
import apexContent from "/src/home_page/media/img/svg/apex_logo.svg";

import battlefieldLink from "/src/home_page/media/img/Header/battlefield.jpg";
import battlefieldContent from "/src/home_page/media/img/svg/battlefield_logo.svg";

import simsLink from "/src/home_page/media/img/Header/sims.jpg";
import simsContent from "/src/home_page/media/img/Header/the-sims-4-mono-logo.png";

export default function Sidebar({ close, headerText }) {
  return (
    <div className="f_sidebar" id="f_sidebar">
      <div className="f_sidebar_wrapper">
        <div className="f_sidebar_top">
          <a className="f_sidebar_text" href="">
            {" "}
            {headerText}
          </a>
          <img className="f_nav_x" id="f_closebtn" src={x} onClick={close} />
        </div>

        <div className="f_sidebar_content">
          <SidebarElementBig />
          <SidebarElement linkSrc={fifaLink} contentSrc={fifaContent} />
          <SidebarElement linkSrc={f1Link} contentSrc={f1Content} />
          <SidebarElement linkSrc={maddenLink} contentSrc={maddenContent} />
          <SidebarElement linkSrc={apexLink} contentSrc={apexContent} />
          <SidebarElement
            linkSrc={battlefieldLink}
            contentSrc={battlefieldContent}
          />
          <SidebarElement linkSrc={simsLink} contentSrc={simsContent} />
        </div>
      </div>
    </div>
  );
}
