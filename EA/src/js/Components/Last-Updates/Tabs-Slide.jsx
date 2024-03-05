import { useContext } from "react";
import { useUpdateNews } from "../../Hooks/useUpdateNews";
import { LanguageContext } from "../../Contexts/Language-Context";
import { Tab } from "./Tab";

export function TabsSlide() {
  const newsJson = useUpdateNews(useContext(LanguageContext));
  const toArray = (news) => {
    const tabs = [];
    let i=0;
    for (const key in news) {
      tabs.push(<Tab key={i} news={key} />);
      i++;
    }
    return tabs;
  };
  return (
    <div id="tabs-slide">
      <ul id="updates-tabs">{toArray(newsJson)}</ul>
    </div>
  );
}
