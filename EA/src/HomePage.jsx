import { useNavigate, useParams } from "react-router-dom";
import { LastUpdates } from "./home_page/jsx/Components/Last-Updates/Last-Updates";
import { useEffect } from "react";
import { LanguageContext } from "./home_page/jsx/Contexts/LanguageContext";
import "./home_page/css/styles.css"
import { Footer } from "./home_page/jsx/Components/footer/Footer";
import { PlaySectionsHeader } from "./home_page/jsx/Components/Play-Sections/Play-Sections-Header";
import { PlaySectionsFooter } from "./home_page/jsx/Components/Play-Sections/Play-Sections-Footer";
const languages = ["es-es", "en-gb", "en-us"];

export function HomePage() {

  const { lang } = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    if (lang && !languages.includes(lang)) navigate("/");
  },[lang]);

  return (

    <LanguageContext.Provider
      value={lang || "es-es"}>
      <PlaySectionsHeader/>
      <LastUpdates/>
      <PlaySectionsFooter/>
      <Footer />
    </LanguageContext.Provider>
  );
}
