import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";

export function MediaLinks() {
    const data = useContext(JsonContext);

    return (
    <div id="media-links">
        {data && <section>
            <div id="local-links">{data["media-links"]["local-links"].map(link => {
                return <div key={link} className="local-link" title={link}><a href="">{link}</a></div>;
            })}</div>
            <div id="social-container">
                <h3 id="social-links-h3">{data["media-links"].join}</h3>
                <div id="social-links">{data["media-links"]["social-links"].map(link => {
                    return <div key={link} className="social-link" title={link}><a href=""><img src={`./src/home_page/media/img/footer/social/${link}.svg`} alt={link} /></a></div>
                })}</div>
            </div>
        </section>}
    </div>
    );
}
