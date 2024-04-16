import { useContext } from "react";
import { Card } from "./Card";
import { NewsContext } from "../../Contexts/NewsContext";
import { TabContext } from "../../Contexts/TabContext";

export function CardsUpdates() {
  const news = useContext(NewsContext);
  const {selectedTab}=useContext(TabContext);
  return (
    <div id="cards-updates">
      {news && news[selectedTab]?.cardsInfo &&
        news[selectedTab]?.cardsInfo.map((card) => (
          <Card key={card.id} content={card} />
        ))}
    </div>
  );
}
