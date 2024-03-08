import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";
import ButtonSelector from "./ButtonSelector";

export function ServsAndLegalTerms() {
    const data = useContext(JsonContext);

    return <div>
        {data && <section>
            <div><img src="./src/home_page/media/img/footer/ea-violet.png" alt="ea-logo" /></div>
            <div>
                <div>
                    <div>{data["servs-and-legal-terms"].servs.map(link => {
                        return <Serv key={link} link={link} />;
                    })}</div>
                    <div>
                        <ButtonSelector items={data["servs-and-legal-terms"].prices} />
                        <ButtonSelector items={data["servs-and-legal-terms"].langs} />
                    </div>
                </div>
                <div>
                    <div>Terminos legales + copyright</div>
                    <div></div>
                </div>
            </div>
        </section>}
    </div>;
}

function Serv({ link }) {

    return <><span>{link}</span></>;
}
