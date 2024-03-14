import { useContext, useState } from "react";
import { TabContext } from "../../Contexts/TabContext";

export function Tab({ news, isFirst, isLast, changeTab }) {
  const [isSelected, setIsSelected] = useState(news===useContext(TabContext));
  
  const handleLinkClick = (event) => {
    event.preventDefault();
    window.location = window.location.href.split("#")[0] + "#" + news;
    document.getElementById(`radio-${news}`).checked = true;
    changeTab(news);
  };

  return (
    <li id={news}>
      <input
        type="radio"
        id={`radio-${news}`}
        className="tab-radio"
        name="tab-value"
        defaultChecked={isSelected}
      ></input>
      <a
        onClick={handleLinkClick}
        href={`#${news}`}
        className="update-tab"
        style={
          (isFirst && { borderLeft: "none" }) ||
          (isLast && { borderRight: "none" })
        }
      >
        <span>{news.replaceAll("-", "\xa0")}</span>
      </a>
      <hr />
    </li>
  );
}
