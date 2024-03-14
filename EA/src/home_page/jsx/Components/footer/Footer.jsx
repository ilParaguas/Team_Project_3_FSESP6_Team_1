import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx"
import { TermsEA } from "./TermsEA";
import { MediaLinks } from "./MediaLinks";
import { ServsAndLegalTerms } from "./ServsAndLegalTerms";
import { useFooterJsonFetch } from "../../Hooks/useFooterJsonFetch";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

export function Footer() {
    const lang = useContext(LanguageContext)
    const json = useFooterJsonFetch(lang)

    return (
        <div id="footer">
            <JsonContext.Provider value={json}>
                <TermsEA />
                <footer>
                    <MediaLinks />
                    <div id="media-space-div"></div>
                    <ServsAndLegalTerms />
                </footer>
            </JsonContext.Provider>
        </div>
    );
}