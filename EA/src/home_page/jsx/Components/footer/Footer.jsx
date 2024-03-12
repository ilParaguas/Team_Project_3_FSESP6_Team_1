import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx"
import { TermsEA } from "./TermsEA";
import { MediaLinks } from "./MediaLinks";
import { ServsAndLegalTerms } from "./ServsAndLegalTerms";
import { useFooterJsonFetch } from "../../Hooks/useFooterJsonFetch";

export function Footer() {
    const json = useFooterJsonFetch()

    return (
        <div id="footer">
            <JsonContext.Provider value={json}>
                <TermsEA />
                <footer>
                    <MediaLinks />
                    <ServsAndLegalTerms />
                </footer>
            </JsonContext.Provider>
        </div>
    );
}