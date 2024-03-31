import { GameCard } from "./Game-Card";
import { useGamesGallery } from "../../Hooks/useGamesGallery";
import { useEffect } from "react";
const url = "src/home_page/json/featured-games-gallery.json";
export function GameGallery({ linkText, links }) {
  const {gallery,getGallery} = useGamesGallery(url);
  useEffect(()=>{
    getGallery();
  },[]);
  return (
    <div id="gameGallery">
      {gallery && links &&
        gallery.map((card, index) => (
          <GameCard key={index} link={links[index]} text={linkText} content={card} />
        ))}
    </div>
  );
}
