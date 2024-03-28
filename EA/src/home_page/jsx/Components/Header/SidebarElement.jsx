import IconButton from "./IconButton";

export default function SidebarElement({ linkSrc, contentSrc }) {
  return (
    <div className="f_sidebar_small">
      <div className="f_sidebar_small_wrapper">
        <IconButton
          aClass="f_sidebar_small_link"
          srcClass="f_sidebar_small_img"
          src={linkSrc}
        />
        <div className="f_sidebar_small_content_container">
          <img className="f_sidebar_small_img_content" src={contentSrc} />
        </div>
      </div>
    </div>
  );
}
