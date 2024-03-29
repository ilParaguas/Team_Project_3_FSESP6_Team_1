import { GameCard } from "./Game-Card";
import { useGamesGallery } from "../../Hooks/useGamesGallery";
const url = "src/home_page/json/featured-games-gallery.json";
export function GameGallery({ texts }) {
  const gallery = useGamesGallery(url);
  return (
    <div id="games">
      {gallery &&
        gallery.map((card, index) => (
          <GameCard key={index} text={texts?.linkText} content={card} />
        ))}
    </div>
  );
}
