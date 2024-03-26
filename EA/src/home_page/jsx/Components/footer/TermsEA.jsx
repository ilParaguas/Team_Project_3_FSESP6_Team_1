import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";

export function TermsEA() {
    const data = useContext(JsonContext);

    return <div id="terms-EA">
        {data && <p id="terms-EA-p">{data["terms-ea"].start}
        <a href="">{data["terms-ea"].link}</a>
        {data["terms-ea"].final}</p>}
    </div>
}