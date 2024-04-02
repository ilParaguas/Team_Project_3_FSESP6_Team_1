import { useState } from "react";
export function useFeaturedGamesTexts(language) {
  const [texts, setTexts] = useState({});
  const getTexts = async () => {
    try {
      const r = await fetch(`src/home_page/json/featured-games.json`);
      if (r.status === 200) {
        const json = await r.json();
        setTexts(json[language]);
      } else {
        throw new Error(r.status);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return {texts,getTexts};
}