import { useContext, useEffect, useRef } from "react";
import { Tab } from "./Tab";
import { NewsContext } from "../../Contexts/NewsContext";

export function TabsBar() {
  const newsJson = useContext(NewsContext);
  const tabSlideRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => {
      handleResize(tabSlideRef.current);
    });
    return () => {
      window.removeEventListener("resize", () => {
        handleResize(tabSlideRef.current);
      });
    };
  }, []);
  
  return (
    <div id="tabs-bar">
      <div id="tabs-slide" onScroll={handleScroll} ref={tabSlideRef}>
        <ul id="updates-tabs">{toArray(newsJson)}</ul>
      </div>
    </div>
  );
}
const toArray = (news) => {
  const tabs = [];
  let i = 0;
  for (const key in news) {
    if (i === 0)
      tabs.push(
        <Tab key={i} news={key} isFirst={true} />
      );
    else if (i < Object.keys(news).length - 1)
      tabs.push(<Tab key={i} news={key} />);
    else
      tabs.push(
        <Tab key={i} news={key} isLast={true} />
      );
    i++;
  }
  return tabs;
};
const handleScroll = (event) => {
  const arrowL = document.getElementById("arrow-left");
  const arrowR = document.getElementById("arrow-right");
  if (event.target.scrollLeft > 0) {
    arrowL.style.display = "block";
  } else {
    arrowL.style.display = "none";
  }
  if (
    Math.ceil(event.target.scrollLeft + event.target.clientWidth) <
    event.target.scrollWidth-3
  ) {
    arrowR.style.display = "block";
  } else {
    arrowR.style.display = "none";
  }
};
const handleResize = (element) => {
  const arrowL = document.getElementById("arrow-left");
  const arrowR = document.getElementById("arrow-right");
  if (element.scrollWidth > element.clientWidth) {
    arrowR.style.display = "block";
  } else {
    arrowR.style.display = "none";
    arrowL.style.display = "none";
  }
};