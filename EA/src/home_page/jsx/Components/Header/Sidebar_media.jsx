import IconButton from "./IconButton";
import MediaElement from "./MediaElement";
import x_media from "/src/home_page/media/img/svg/x_media.svg";
import ealogo from "/src/home_page/media/img/svg/ealogo.svg";

export default function Sidebar_media({ close, menu }) {
  return (
    <div className="f_sidebar_media" id="f_sidebar_media">
      <div className="f_sidebar_media_wrapper">
        <div className="f_sidebar_media_header">
          <IconButton
            aClass="f_sidebar_media_text"
            srcClass="f_sidebar_media_himage"
            src={ealogo}
            aHref={""}
          />
          <img
            className="f_sidebar_media_x"
            id="f_closemedia"
            src={x_media}
            onClick={close}
          />
        </div>
        <div className="f_sidebar_media_body">
          <div className="f_sidebar_media_body_wrapper">
            {menu?.map((element, index) => (
              <MediaElement item={element} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
