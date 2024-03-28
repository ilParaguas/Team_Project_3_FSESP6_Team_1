import usericon from "/src/home_page/media/img/svg/usericon.svg";
import question from "/src/home_page/media/img/svg/questionmark.svg";
import ealogo from "/src/home_page/media/img/svg/ealogonav.svg";
import IconButton from "./IconButton";

export default function NavbarBlack() {
  return (
    <div id="f_nav_black">
      <ul className="f_nav_ul">
        <IconButton
          id={"f_username_icon"}
          aClass={"f_nav_li"}
          src={usericon}
          srcClass={"f_nav_svg"}
        />
        <IconButton
          id={"f_help_icon"}
          aClass={"f_nav_li"}
          src={question}
          srcClass={"f_nav_svg"}
        />
        <IconButton
          id={"f_eaicon"}
          aClass={"f_nav_li"}
          src={ealogo}
          srcClass={"f_nav_svg"}
          srcId={"f_ealogo"}
        />
      </ul>
    </div>
  );
}
