import IconButton from "./IconButton";
import Dropdown from "./Dropdown";
import dots from "/src/home_page/media/img/svg/dropdowndots.svg";
import anvorgesa from "/src/home_page/media/img/svg/anvorgesa.svg";
import eaimage from "/src/home_page/media/img/svg/ealogo.svg";

export default function NavbarWhite({ openSidebar, openSidebarMedia, menu }) {
  return (
    <div id="f_nav_white">
      <IconButton
        customClick={openSidebar}
        id="f_sidebar_icon"
        src={dots}
        srcClass="f_svg_drop"
      />
      <IconButton
        customClick={openSidebarMedia}
        id="f_icon_anvorgesa"
        src={anvorgesa}
        srcClass="f_svg_drop"
      />
      <IconButton id={"f_eaimage"} src={eaimage} aHref={""} />

      {menu?.map((element, index) => (
        <Dropdown header={element.title} itemList={element.list} key={index} />
      ))}
    </div>
  );
}
