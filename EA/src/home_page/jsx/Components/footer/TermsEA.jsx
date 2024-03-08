import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";

export function TermsEA() {
    const data = useContext(JsonContext);

    return <div>
       {data && <p>{data["terms-ea"].start}<strong><a>{data["terms-ea"].link}</a></strong>{data["terms-ea"].final}</p>}
    </div>
}