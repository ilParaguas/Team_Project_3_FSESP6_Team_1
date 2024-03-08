import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";

export function TermsEA() {
    const data = useContext(JsonContext)["terms-ea"];

    return <div>
        <p>{data.start}<strong><a>{data.link}</a></strong>{data.final}</p>
    </div>
}