import { useContext } from "react";
import { ReadMore } from "../Last-Updates/ReadMore";

import { LanguageContext } from "../../Contexts/LanguageContext";
import { useFeaturedGamesTexts } from "../../Hooks/useFeaturedGamesTexts";

import { GameGallery } from "./Game-Gallery";

export function FeaturedGames() {
  const texts = useFeaturedGamesTexts(useContext(LanguageContext));
  
  return (
    <section id="featured-games">
      <h2 id="updates-title">{texts && texts.title}</h2>
      <GameGallery texts={texts}/>
      <ReadMore text={texts && texts.buttonText} />
    </section>
  );
}
