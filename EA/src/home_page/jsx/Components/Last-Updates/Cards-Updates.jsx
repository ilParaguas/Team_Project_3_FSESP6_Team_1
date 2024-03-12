import { useContext } from "react";
import { Card } from "./Card";
import { NewsContext } from "../../Contexts/NewsContext";

export function CardsUpdates({ selectedTab }) {
  const cards = useContext(NewsContext);
  if(cards){
    console.log(cards);
  }
  return (
    <div id="cards-updates">
      {cards && cards[selectedTab] &&
        cards[selectedTab].map((card, index) => (
          <Card key={index} content={card} />
        ))}
    </div>
  );
}
