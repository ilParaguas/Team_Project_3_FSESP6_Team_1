import { useState } from "react";

export function Tab({ news, isFirst, isLast, changeTab }) {
  const [isSelected, setIsSelected] = useState(false);
  const splitUrl = window.location.href.split("#");
  if (splitUrl[1] && splitUrl[1]===news && !isSelected) {
    setIsSelected(true)
    changeTab(news);
  }else if(!splitUrl[1]&&isFirst && !isSelected){
    setIsSelected(true)
    changeTab(news);
  }
  const handleLinkClick = () => {
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
