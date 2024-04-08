import { useEffect, useState } from "react";

export default function useHeader(language) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getHeader() {
    setLoading(true);
    try {
      const res = await fetch(`/src/home_page/json/header-${language}.json`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.log(`Error: ${err}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHeader();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return { data, loading };
}
