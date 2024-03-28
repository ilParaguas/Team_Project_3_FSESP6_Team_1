import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";
import ButtonSelectorLanguages from "./ButtonSelectorLanguages";
import { LanguageContext } from "../../Contexts/LanguageContext";

export function ServsAndLegalTerms() {
    const data = useContext(JsonContext);
    const lang = useContext(LanguageContext);

    console.log(`./src/home_page/media/img/footer/truste/privacity-policy-${lang}.svg`);

    return <div id="servs-and-legal">
        {data && <section id="servs-and-legal-section">
            <div><a href="" title={data["servs-and-legal-terms"]["ea-icon"]}><img id="ea-violet" src="./src/home_page/media/img/footer/ea-violet.png" alt="ea-logo" /></a></div>
            <div id="ea-servs-and-legal">
                <div>
                    <div id="servs-links">{data["servs-and-legal-terms"].servs.map(link => {
                        return <div className="servs-link" key={link}>{link}</div>
                    })}</div>
                    <div id="footer-buttons">
                        <ButtonSelectorLanguages items={data["servs-and-legal-terms"].langs} />
                        <ButtonSelectorLanguages items={data["servs-and-legal-terms"].langs} />
                    </div>
                </div>

                <div>
                    <div id="legal-terms">
                        {data["servs-and-legal-terms"]["legal-terms"].map( item => (
                            <a href="" key={item}>{item}</a>
                        )
                        )}
                        <div>{data["servs-and-legal-terms"].copyright}</div>
                    </div>
                    <div><img src={`./src/home_page/media/img/footer/truste/privacy-policy-${lang}.svg`} /></div>
                </div>
            </div>
        </section>}
    </div>;
}
