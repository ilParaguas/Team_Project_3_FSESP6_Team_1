import "./home_page/css/styles.css";
import { useParams } from "react-router-dom";
import { LastUpdates } from "./home_page/jsx/Components/Last-Updates/Last-Updates";
import { LanguageContext } from "./home_page/jsx/Contexts/Language-Context";
import { Footer } from "./home_page/jsx/Components/footer/Footer";
import Header from "./home_page/jsx/Components/Header/Header";

export function HomePage() {
  const { lang } = useParams();

  return (
    <LanguageContext.Provider value={lang || "es-es"}>
      <Header />
      <LastUpdates />
      <Footer />
    </LanguageContext.Provider>
  );
}
