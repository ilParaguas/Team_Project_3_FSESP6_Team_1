import { useEffect, useState } from "react";
export function useUpdateNews(language) {
export function useUpdateNews(url) {
  const [newsJson, setNewsJson] = useState(null);
  const getNews = async () => {
    try {
      if (url) {
        const r = await fetch(url);
        if (r.status === 200) {
          const json = await r.json();
          setNewsJson(json);
        } else {
          throw new Error(r.status);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getNews();
  }, [url]);
  return newsJson;
}
