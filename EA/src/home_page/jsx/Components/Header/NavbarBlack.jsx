import IconButton from "./IconButton";

import usericon from "/src/home_page/media/img/svg/usericon.svg";
import question from "/src/home_page/media/img/svg/questionmark.svg";
import ealogo from "/src/home_page/media/img/svg/ealogonav.svg";

export default function NavbarBlack({ handleUsername, handleHelp }) {
  return (
    <div id="f_nav_black">
      <div className="f_nav_ul">
        <IconButton
          id={"f_username_icon"}
          aClass={"f_nav_li"}
          src={usericon}
          srcClass={"f_nav_svg"}
          customClick={handleUsername}
        />
        <IconButton
          id={"f_help_icon"}
          aClass={"f_nav_li"}
          src={question}
          srcClass={"f_nav_svg"}
          customClick={handleHelp}
        />
        <IconButton
          id={"f_eaicon"}
          aClass={"f_nav_li"}
          src={ealogo}
          srcClass={"f_nav_svg"}
          srcId={"f_ealogo"}
        />
      </div>
    </div>
  );
}
