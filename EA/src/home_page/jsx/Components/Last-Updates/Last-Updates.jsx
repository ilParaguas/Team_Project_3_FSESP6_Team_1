import { useContext, useState } from "react";
import { NewsContext } from "../../Contexts/NewsContext";
import { useUpdateNews } from "../../Hooks/useUpdateNews";
import { TabsBar } from "./Tabs-Bar";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { CardsUpdates } from "./Cards-Updates";

export function LastUpdates() {
  const newsJson = useUpdateNews(useContext(LanguageContext));
  const [selectedTab, setSelectedTab] = useState("");
  return (
    <section id="last-updates">
      <h2 id="updates-title">Ultimas Actualizaciones</h2>
      <NewsContext.Provider value={newsJson}>
        <TabsBar changeTab={setSelectedTab}/>
        <div className="hr"></div>
        <div id="news">
          <CardsUpdates selectedTab={selectedTab}/>
        </div>
      </NewsContext.Provider>
    </section>
  );
}
