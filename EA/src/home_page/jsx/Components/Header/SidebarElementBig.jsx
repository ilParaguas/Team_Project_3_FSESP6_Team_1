import IconButton from "./IconButton";
import purple from "/src/home_page/media/img/Header/purple.png";
import ealogo from "/src/home_page/media/img/svg/ea_logo_white_png.svg";

export default function SidebarElementBig() {
  return (
    <div className="f_sidebar_big">
      <IconButton
        aClass="f_sidebar_link"
        srcClass="f_sidebar_imgbig"
        src={purple}
      />
      <div className="f_sidebar_imgbig_content_container">
        <img className="f_sidebar_imgbig_content" src={ealogo} />
      </div>
    </div>
  );
}
