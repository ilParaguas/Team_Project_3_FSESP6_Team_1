import { useState } from "react";

export function useUpdateNews(url) {
  const [news, setNews] = useState(null);
  const getNews = async () => {
    try {
      if (url) {
        const r = await fetch(url);
        if (r.status === 200) {
          const json = await r.json();
          setNews(json);
        } else {
          throw new Error(r.status);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return {news,getNews};
}
