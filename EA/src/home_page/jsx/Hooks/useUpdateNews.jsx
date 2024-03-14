import { useEffect, useState } from "react";
export function useUpdateNews(language) {
  const [newsJson, setNewsJson] = useState(null);
  const getNews = async () => {
    try {
      const r = await fetch(
        `${location.protocol}//${location.host}/src/home_page/json/last-updates-${language}.json`
      );
      if (r.status === 200) {
        console.log(r)
        const json = await r.json();
        setNewsJson(json);
      } else {
        console.log("aqui")
        throw new Error(r.status);
      }
    } catch (error) {
        console.error(error);
    }
  };
  useEffect(() => {
    getNews();
  }, [language]);
  return newsJson;
}
