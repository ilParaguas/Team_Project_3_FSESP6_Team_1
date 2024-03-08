import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx"
import { LanguageContext } from "/src/home_page/jsx/Contexts/Language-Context.jsx"
import { TermsEA } from "./TermsEA";
import { MediaLinks } from "./MediaLinks";
import { ServsAndLegalTerms } from "./ServsAndLegalTerms";
import { useFooterJsonFetch } from "../../Hooks/useFooterJsonFetch";

export function Footer() {
    const lang = useContext(LanguageContext);
    const json = useFooterJsonFetch()

    return (
        <div>
            <JsonContext.Provider value={json}>
                {lang}
                <TermsEA />
                <MediaLinks />
                <ServsAndLegalTerms />
            </JsonContext.Provider>
        </div>
    );
}