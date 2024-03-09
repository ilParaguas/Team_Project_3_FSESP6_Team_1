import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx"
import { TermsEA } from "./TermsEA";
import { MediaLinks } from "./MediaLinks";
import { ServsAndLegalTerms } from "./ServsAndLegalTerms";
import { useFooterJsonFetch } from "../../Hooks/useFooterJsonFetch";

export function Footer() {
    const json = useFooterJsonFetch()

    return (
        <div className="footer">
            <JsonContext.Provider value={json}>
                <TermsEA />
                <MediaLinks />
                <ServsAndLegalTerms />
            </JsonContext.Provider>
        </div>
    );
}