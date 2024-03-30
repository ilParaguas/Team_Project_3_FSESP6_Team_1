import { GameCard } from "./Game-Card";
import { useGamesGallery } from "../../Hooks/useGamesGallery";
import { useEffect } from "react";
const url = "src/home_page/json/featured-games-gallery.json";
export function GameGallery({ linkText }) {
  const {gallery,getGallery} = useGamesGallery(url);
  useEffect(()=>{
    getGallery();
  },[]);
  return (
    <div id="gameGallery">
      {gallery &&
        gallery.map((card, index) => (
          <GameCard key={index} text={linkText} content={card} />
        ))}
    </div>
  );
}
