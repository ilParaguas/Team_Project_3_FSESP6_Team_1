import { useEffect, useState } from "react";

export function useGamesGallery(url) {
  const [gallery, setGallery] = useState([]);
  const getGallery = async () => {
    try {
      if (url) {
        const r = await fetch(url);
        if (r.status === 200) {
          const json = await r.json();
          setGallery(json);
        } else {
          throw new Error(r.status);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return {gallery,getGallery};
}