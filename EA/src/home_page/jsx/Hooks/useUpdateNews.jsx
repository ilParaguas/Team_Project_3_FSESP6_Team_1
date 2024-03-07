import { useEffect, useState } from "react";
export function useUpdateNews(language) {
  const [newsJson, setNewsJson] = useState(null);
  const getNews = async () => {
    try {
      const r = await fetch(
        `${location.protocol}//${location.host}/src/home_page/json/last-updates-${language}.json`
      );
      if (r.status === 200) {
        const json = await r.json();
        console.log(json);
        setNewsJson(json);
      } else {
        throw new Error(r.status);
      }
    } catch (error) {
        console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, [language]);
  return newsJson;
}
