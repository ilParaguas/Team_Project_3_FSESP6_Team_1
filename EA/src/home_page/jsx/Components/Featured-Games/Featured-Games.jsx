import { useContext } from "react";

import { LanguageContext } from "../../Contexts/LanguageContext";
import { useFeaturedGamesTexts } from "../../Hooks/useFeaturedGamesTexts";

import { GameGallery } from "./Game-Gallery";
import { useEffect } from "react";
import { LatestGamesButton } from "./Latest-Games-Button";

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
          <GameGallery linkText={texts.linkText} links={texts.gameLinks}/>
          <LatestGamesButton info={texts.latestGames} />
        </>
      )}
    </section>
  );
}
