import { SlideArrow } from "./Slide-Arrow";
import { useContext } from "react";
import { Tab } from "./Tab";
import { NewsContext } from "../../Contexts/NewsContext";

export function TabsBar({ changeTab }) {
  const newsJson = useContext(NewsContext);
  const toArray = (news) => {
    const tabs = [];
    let i = 0;
    for (const key in news) {
      if (i === 0) 
        tabs.push(<Tab key={i} news={key} isFirst={true} changeTab={changeTab}/>);
      else if (i < Object.keys(news).length - 1)
        tabs.push(<Tab key={i} news={key} changeTab={changeTab}/>);
      else tabs.push(<Tab key={i} news={key} isLast={true} changeTab={changeTab}/>);
      i++;
    }
    return tabs;
  };
  return (
    <div id="tabs-bar">
      <SlideArrow direction="left" />
      <div id="tabs-slide">
        <ul id="updates-tabs">{toArray(newsJson)}</ul>
      </div>
      <SlideArrow direction="right" />
    </div>
  );
}
