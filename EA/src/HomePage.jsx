import { useNavigate, useParams } from "react-router-dom";
import { LastUpdates } from "./home_page/jsx/Components/Last-Updates/Last-Updates";
import { LanguageContext } from "./home_page/jsx/Contexts/LanguageContext";
import "./home_page/css/styles.css";
import { useEffect } from "react";
const languages = ["es-es", "en-gb", "en-us"];
export function HomePage() {
  const { language } = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    if (language && !languages.includes(language)) navigate("/");
  },[language]);

  return (
    <LanguageContext.Provider value={language || "es-es"}>
      
        <LastUpdates />
    </LanguageContext.Provider>
  );
}
