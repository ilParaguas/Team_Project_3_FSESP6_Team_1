import { useEffect, useState } from "react";

export function useFooterJsonFetch(lang) {
  const [data, setData] = useState({});

  async function jsonFetch() {
    try {
      const response = await fetch("/src/home_page/json/footer.json");
      const data = await response.json();
      setData({ ...data });
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  useEffect(() => {
    jsonFetch(lang);
  }, [lang]);

  return data[lang];
}
