import { useContext } from "react";
import { ReadMore } from "../Last-Updates/ReadMore";

import { LanguageContext } from "../../Contexts/LanguageContext";
import { useFeaturedGamesTexts } from "../../Hooks/useFeaturedGamesTexts";

import { GameGallery } from "./Game-Gallery";
import { useEffect } from "react";

export function FeaturedGames() {
  const {texts, getTexts} = useFeaturedGamesTexts(useContext(LanguageContext));
  useEffect(()=>{
    getTexts();
  },[]);

  return (
    <section id="featured-games">
      {texts && (
        <>
          <h2 id="games-title">{texts.title}</h2>
          <GameGallery linkText={texts.linkText} />
          <ReadMore text={texts.buttonText} />
        </>
      )}
    </section>
  );
}
