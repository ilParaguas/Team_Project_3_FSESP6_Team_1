import { useEffect, useState } from "react";

export function useGamesGallery(url) {
  const [galleryJson, setGalleryJson] = useState(null);
  const getGallery = async () => {
    try {
      if (url) {
        const r = await fetch(url);
        if (r.status === 200) {
          const json = await r.json();
          setGalleryJson(json);
        } else {
          throw new Error(r.status);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getGallery();
  }, [url]);
  return galleryJson;
}