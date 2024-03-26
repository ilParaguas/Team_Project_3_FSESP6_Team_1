import usericon from "/src/home_page/media/img/svg/usericon.svg";
import question from "/src/home_page/media/img/svg/questionmark.svg";
import ealogo from "/src/home_page/media/img/svg/ealogonav.svg";

export default function NavbarBlack() {
  return (
    <div id="f_nav_black">
      <ul className="f_nav_ul">
        <li className="f_nav_li" id="f_username_icon">
          <img src={usericon} className="f_nav_svg" />
        </li>
        <li className="f_nav_li" id="f_help_icon">
          <img src={question} className="f_nav_svg" />
        </li>
        <li className="f_nav_li" id="f_eaicon">
          <a
            href=""
            title="EA Logo"
            aria-label="Electronic Arts Home Page - Official EA Site"
          >
            <img src={ealogo} id="f_ealogo" className="f_nav_svg" />
          </a>
        </li>
      </ul>
    </div>
  );
}
