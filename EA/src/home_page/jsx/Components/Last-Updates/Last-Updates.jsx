import { useContext, useEffect, useState } from "react";
import { TabsBar } from "./Tabs-Bar";
import { CardsUpdates } from "./Cards-Updates";
import { TabContext } from "../../Contexts/TabContext";
import { NewsContext } from "../../Contexts/NewsContext";
import { useNavigate } from "react-router-dom";
import { useUpdateNews } from "../../Hooks/useUpdateNews";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { ReadMore } from "./ReadMore";
import { useLastUpdatesTexts } from "../../Hooks/useLastUpdatesTexts";

export function LastUpdates() {
  const [selectedTab, setSelectedTab] = useState("");
  const lang = useContext(LanguageContext);
  const { texts, getTexts } = useLastUpdatesTexts(lang);
  const { news, getNews } = useUpdateNews(texts?.url);
  const splitUrl = window.location.href.split("#");
  const navigate = useNavigate();

  useEffect(() => {
    getTexts();
  }, [lang]);
  useEffect(() => {
    getNews();
  }, [texts]);
  useEffect(
    () => setTab(splitUrl[1], news, selectedTab, setSelectedTab, navigate),
    [splitUrl]
  );
  return (
    <section id="last-updates">
      {texts && (
        <>
          <h2 id="updates-title">{texts.title}</h2>
          <NewsContext.Provider value={news}>
            <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
              <TabsBar />
              <div className="hr"></div>
              <div id="news">
                <CardsUpdates />
                <ReadMore text={texts.readMore} link={news && news[selectedTab]?.readMoreLink}/>
              </div>
            </TabContext.Provider>
          </NewsContext.Provider>
        </>
      )}
    </section>
  );
}
const setTab = (newTab, json, prevTab, setSelectedTab, navigate) => {
  if (
    newTab &&
    json &&
    Object.keys(json).includes(newTab) &&
    prevTab != newTab
  ) {
    setSelectedTab(newTab);
  } else if (json && !prevTab) {
    if (newTab && !Object.keys(json).includes(newTab)) {
      navigate("/");
    } else {
      setSelectedTab(Object.keys(json)[0]);
    }
  }
};
