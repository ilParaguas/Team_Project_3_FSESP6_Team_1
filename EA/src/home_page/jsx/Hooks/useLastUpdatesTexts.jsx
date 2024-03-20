import { useEffect, useState } from "react";
export function useLastUpdatesTexts(language) {
  const [texts, setTexts] = useState(null);
  const getTexts = async () => {
    try {
      const r = await fetch(`src/home_page/json/last-updates.json`);
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
  useEffect(() => {
    getTexts();
  }, [language]);
  return texts;
}
