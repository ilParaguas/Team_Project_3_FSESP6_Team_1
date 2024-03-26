import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";
import ButtonSelectorLanguages from "./ButtonSelectorLanguages";

export function ServsAndLegalTerms() {
    const data = useContext(JsonContext);

    return <div>
        {data && <section>
            <div><a href="" title={data["servs-and-legal-terms"]["ea-icon"]}><img src="./src/home_page/media/img/footer/ea-violet.png" alt="ea-logo" /></a></div>
            <div>
                <div>
                    <div>{data["servs-and-legal-terms"].servs.map(link => {
                        return <div key={link}>{link}</div>
                    })}</div>
                    <div>
                        <ButtonSelectorLanguages items={data["servs-and-legal-terms"].langs} />
                        {/* <ButtonSelectorLanguages items={data["servs-and-legal-terms"].langs} /> */}
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>}
    </div>;
}
