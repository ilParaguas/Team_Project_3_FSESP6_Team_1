import { useContext } from "react";
import { Card } from "./Card";
import { NewsContext } from "../../Contexts/NewsContext";
import { TabContext } from "../../Contexts/TabContext";

export function CardsUpdates() {
  const cards = useContext(NewsContext);
  const {selectedTab}=useContext(TabContext);
  return (
    <div id="cards-updates">
      {cards && cards[selectedTab] &&
        cards[selectedTab].map((card, index) => (
          <Card key={index} content={card} />
        ))}
    </div>
  );
}
