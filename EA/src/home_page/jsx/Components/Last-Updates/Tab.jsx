import { useContext, useEffect, useRef, useState } from "react";
import { TabContext } from "../../Contexts/TabContext";

export function Tab({ news, isFirst, isLast }) {
  const {selectedTab,setSelectedTab} = useContext(TabContext);
  const tabRef = useRef();
  useEffect(()=>{
    if(selectedTab==news){
      document.getElementById(`radio-${news}`).checked = true;
      document.getElementById(news+"-link").scrollIntoView({block: "nearest",behavior: "smooth",inline: "center"});
    }
    
  },[selectedTab])
  const handleLinkClick = (event) => {
    //event.target.scrollIntoView({block: "nearest",behavior: "smooth",inline: "center"});
    setSelectedTab(news);
  };
  
  return (
    <li>
      <input
        type="radio"
        id={`radio-${news}`}
        className="tab-radio"
        name="tab-value"
        ref={tabRef}
      ></input>
      <a
        id={news+"-link"}
        onClick={handleLinkClick}
        href={`#${news}`}
        className="update-tab"
        style={
          (isFirst && { borderLeft: "none" }) ||
          (isLast && { borderRight: "none" })
        }
      >
        <span>{news.replaceAll("-", " ")}</span>
      </a>
      <hr />
    </li>
  );
}
