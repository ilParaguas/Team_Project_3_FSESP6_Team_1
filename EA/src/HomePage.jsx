import { useNavigate, useParams } from "react-router-dom";
import { LastUpdates } from "./home_page/jsx/Components/Last-Updates/Last-Updates";
import { LanguageContext } from "./home_page/jsx/Contexts/LanguageContext";
import "./home_page/css/styles.css";
import { useEffect } from "react";
const languages = ["es-es", "en-gb", "en-us"];
export function HomePage() {
  const { lang } = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    if (lang && !languages.includes(lang)) navigate("/");
  },[lang]);

  return (
    <LanguageContext.Provider value={lang || "es-es"}>
        <LastUpdates />
    </LanguageContext.Provider>
  );
}
