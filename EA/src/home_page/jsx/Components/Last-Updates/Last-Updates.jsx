import { useContext, useEffect, useState } from "react";
import { TabsBar } from "./Tabs-Bar";
import { CardsUpdates } from "./Cards-Updates";
import { TabContext } from "../../Contexts/TabContext";
import { NewsContext } from "../../Contexts/NewsContext";
import { useNavigate } from "react-router-dom";
import { useUpdateNews } from "../../Hooks/useUpdateNews";
import { LanguageContext } from "../../Contexts/LanguageContext";

export function LastUpdates() {
  const [selectedTab, setSelectedTab] = useState("");
  const newsJson = useUpdateNews(useContext(LanguageContext));
  const splitUrl = window.location.href.split("#");
  const navigate = useNavigate();
  
  useEffect(()=>setTab(splitUrl[1],newsJson,selectedTab,setSelectedTab,navigate),[splitUrl])
  return (
    <section id="last-updates">
      <NewsContext.Provider value={newsJson}>
        <h2 id="updates-title">Ultimas Actualizaciones</h2>
        <TabContext.Provider value={selectedTab}>
          <TabsBar changeTab={setSelectedTab} />
          <div className="hr"></div>
          <div id="news">
            <CardsUpdates />
          </div>
        </TabContext.Provider>
      </NewsContext.Provider>
    </section>
  );
}
const setTab=(newTab,json,prevTab,setSelectedTab,navigate)=>{
  if (
    newTab && json && Object.keys(json).includes(newTab) && prevTab != newTab
  ) {
    setSelectedTab(newTab);
  } else if (json && !prevTab) {
    if (newTab && !Object.keys(json).includes(newTab)) {
      navigate("/");
    }
    else{
      setSelectedTab(Object.keys(json)[0]);
    }
  }
}
