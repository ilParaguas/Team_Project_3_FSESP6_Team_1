import { useParams } from "react-router-dom";
import { LastUpdates } from "./home_page/jsx/Components/Last-Updates/Last-Updates";
import { LanguageContext } from "./home_page/jsx/Contexts/LanguageContext";
import "./home_page/css/styles.css"
export function HomePage() {
  const { language } = useParams();
  console

  return (
    <LanguageContext.Provider
      value={language || "es-es"}
    >
      <LastUpdates/>
    </LanguageContext.Provider>
  );
}
