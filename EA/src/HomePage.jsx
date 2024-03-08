import { useParams } from "react-router-dom";
import { LastUpdates } from "./home_page/jsx/Components/Last-Updates/Last-Updates";
import { LanguageContext } from "./home_page/jsx/Contexts/Language-Context";
import "./home_page/css/styles.css"
import { PlaySectionsHeader } from "./home_page/jsx/Components/Play-Sections/Play-Sections";


export function HomePage() {

  const { lang } = useParams();

  return (
    <LanguageContext.Provider
      value={lang || "es-es"}>
      <PlaySectionsHeader/>
      <LastUpdates/>
    </LanguageContext.Provider>
  );
}
